// ============================================
// FILE 1: app/api/generate-blogs/route.ts
// ============================================
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenAI, Type } from '@google/genai'; 

// --- API Key Configuration ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const serpApiKey = process.env.SERPAPI_API_KEY!;
const geminiApiKey = process.env.GEMINI_API_KEY!;
// NEW: Unsplash API Key for reliable image generation
const unsplashApiKey = process.env.UNSPLASH_API_KEY!; 

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// --- Gemini Client Initialization ---
const ai = new GoogleGenAI({ apiKey: geminiApiKey });

// --- JSON Schema for Structured Output ---
const blogJsonSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "SEO-friendly title (under 60 characters)",
    },
    description: {
      type: Type.STRING,
      description: "Meta description (under 160 characters)",
    },
    content: {
      type: Type.STRING,
      description: "Full blog post in markdown format",
    },
  },
  required: ["title", "description", "content"],
};

interface SerpResult {
  title: string;
  snippet: string;
  link: string;
}

interface BlogData {
  title: string;
  content: string;
  description: string;
  category: string;
  author: string;
  status: string;
  image_url: string;
}

// NEW FUNCTION: Fetch image from Unsplash API
async function fetchUnsplashImage(topic: string, category: string): Promise<string> {
  if (!unsplashApiKey) {
    console.warn('UNSPLASH_API_KEY is missing. Using fallback image URL.');
    return `https://via.placeholder.com/1200x630?text=${encodeURIComponent(topic)}`;
  }
  
  try {
    const query = `${topic} ${category} blog`;
    // Use the official Unsplash Search API
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${unsplashApiKey}&per_page=1&orientation=landscape`;
    
    const response = await fetch(url);
    const data = await response.json();

    // Check if results exist and grab a random one (though per_page=1 should be enough)
    if (data.results && data.results.length > 0) {
      // Use the 'regular' size URL for a good balance of quality and size
      // The provided data shows the 'raw' URL is also available. Using 'regular' is often better.
      return data.results[0].urls.regular;
    }
    
    // Fallback if API call succeeds but returns no relevant results
    return `https://via.placeholder.com/1200x630?text=${encodeURIComponent(topic)}`;

  } catch (error) {
    console.error('Unsplash API Error:', error);
    // Fallback on API error
    return `https://via.placeholder.com/1200x630?text=${encodeURIComponent(topic)}`;
  }
}

// Fetch search results from SERP API (omitted for brevity, no changes)
async function fetchSerpResults(query: string): Promise<SerpResult[]> {
  try {
    const url = `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=${serpApiKey}&engine=google&gl=us&hl=en`;
    const response = await fetch(url);
    const data = await response.json();

    const results: SerpResult[] = [];
    if (data.organic_results) {
      for (const result of data.organic_results.slice(0, 5)) {
        results.push({
          title: result.title || '',
          snippet: result.snippet || '',
          link: result.link || ''
        });
      }
    }
    return results;
  } catch (error) {
    console.error('SERP API Error:', error);
    return [];
  }
}

// Generate blog using Gemini AI with SERP context
async function generateBlogWithAI(topic: string, category: string, serpContext: string): Promise<BlogData> {
  try {
    const prompt = `You are an expert blog writer specializing in ${category}. Write a comprehensive, engaging blog post about: "${topic}".

**SERP Context (use this as factual grounding):**
${serpContext || 'No real-time context available. Use general knowledge.'}

// ... (Rest of prompt is unchanged)

Return ONLY a valid JSON object following the specified schema. DO NOT include any extra text or markdown wrappers like \`\`\`json.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro', 
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        responseMimeType: 'application/json',
        responseSchema: blogJsonSchema,
        maxOutputTokens: 4000,
        temperature: 0.7,
      },
    });

    const rawText = response.text||"";
    
    // ... (Robust JSON extraction logic is unchanged)
    let jsonText = rawText.trim();
    if (jsonText.startsWith('```')) {
      const match = jsonText.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
      if (match && match[1]) {
        // Use the first capture group which contains the JSON content
        jsonText = match[1].trim();
      }
    }
    const jsonMatch = jsonText.match(/\{[\s\S]*\}/);
    if (jsonMatch && jsonMatch[0]) {
      // jsonMatch[0] is the matched string (the JSON object)
      jsonText = jsonMatch[0];
    } else {
       jsonText = rawText;
    }
    
    let blogData: any;
    try {
      blogData = JSON.parse(jsonText);
    } catch (e) {
      console.error("Failed to parse JSON response. Cleaned text:", jsonText);
      throw new Error('Failed to parse AI response as JSON');
    }

    // CRITICAL FIX: Use the new function to fetch a reliable image URL
    const imageUrl = await fetchUnsplashImage(blogData.title || topic, category);

    return {
      title: blogData.title,
      content: blogData.content,
      description: blogData.description.substring(0, 160),
      category,
      author: 'AI Content Generator',
      status: 'draft',
      image_url: imageUrl
    };
  } catch (error) {
    console.error('AI Generation Error:', error);
    throw error;
  }
}

// Save blogs to Supabase (omitted for brevity, no changes)
async function saveBlogsToSupabase(blogs: BlogData[]) {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .insert(blogs)
      .select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Supabase Error:', error);
    throw error;
  }
}

// Main API handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topics, category } = body;

    // ... (Validation code is unchanged)

    // Check API keys
    // UPDATED: Check for UNSPLASH_API_KEY as well
    if (!serpApiKey || !geminiApiKey) { 
      return NextResponse.json(
        { error: 'API keys not configured (SERPAPI_API_KEY or GEMINI_API_KEY missing)' },
        { status: 500 }
      );
    }
    // Added a warning for Unsplash API Key as it is critical for this fix
    if (!unsplashApiKey) {
        console.warn('UNSPLASH_API_KEY is not set. Image generation will rely on a placeholder fallback URL.');
    }

    const generatedBlogs: BlogData[] = [];
    const errors: string[] = [];

    // ... (Blog generation loop is unchanged)
    for (const topic of topics) {
      try {
        console.log(`Generating blog for: ${topic}`);
        
        // Get SERP context
        const serpResults = await fetchSerpResults(topic);
        const serpContext = serpResults
          .map(r => `- ${r.title}\n  ${r.snippet}`)
          .join('\n\n');

        // Generate blog with AI
        const blog = await generateBlogWithAI(topic, category, serpContext);
        generatedBlogs.push(blog);
        
        console.log(`✓ Generated: ${blog.title}`);
      } catch (error) {
        const errorMsg = `Failed to generate blog for "${topic}": ${error instanceof Error ? error.message : String(error)}`;
        console.error(errorMsg);
        errors.push(errorMsg);
      }
    }

    // ... (Save blogs and return response is unchanged)
    if (generatedBlogs.length > 0) {
      try {
        const savedBlogs = await saveBlogsToSupabase(generatedBlogs);
        
        return NextResponse.json({
          success: true,
          message: `Successfully generated ${generatedBlogs.length} blogs`,
          blogs: savedBlogs,
          errors: errors.length > 0 ? errors : undefined
        });
      } catch (dbError) {
        return NextResponse.json(
          { 
            error: 'Failed to save blogs to database',
            details: dbError,
            generatedBlogs 
          },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { 
          error: 'Failed to generate any blogs',
          details: errors
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error },
      { status: 500 }
    );
  }
}