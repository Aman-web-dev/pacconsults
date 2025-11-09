// ============================================
// FILE 2: components/GenerateBlogsDialog.tsx
// ============================================
'use client';

import { useState } from 'react';
import { Button } from './ui/button';

import { Dialog , DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger} from './ui/dialog';

import { Input } from './ui/input';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Loader2, Plus, X, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CATEGORIES = [
  'Technology',
  'Business',
  'Health & Wellness',
  'Travel',
  'Food & Cooking',
  'Personal Finance',
  'Education',
  'Marketing',
  'Lifestyle',
  'Science',
  'Sports',
  'Entertainment',
  'Fashion',
  'Real Estate',
  'Automotive'
];

export function GenerateBlogsDialog() {
  const [open, setOpen] = useState(false);
  const [topics, setTopics] = useState<string[]>(['']);
  const [category, setCategory] = useState('Technology');
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [error, setError] = useState('');
  const router = useRouter();

  const addTopic = () => {
    if (topics.length < 10) {
      setTopics([...topics, '']);
    }
  };

  const removeTopic = (index: number) => {
    if (topics.length > 1) {
      setTopics(topics.filter((_, i) => i !== index));
    }
  };

  const updateTopic = (index: number, value: string) => {
    const newTopics = [...topics];
    newTopics[index] = value;
    setTopics(newTopics);
  };

  const handleGenerate = async () => {
    const validTopics = topics.filter(t => t.trim());
    
    if (validTopics.length === 0) {
      setError('Please enter at least one topic');
      return;
    }

    setGenerating(true);
    setError('');
    setProgress({ current: 0, total: validTopics.length });

    try {
      const response = await fetch('/api/generate-blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topics: validTopics,
          category
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate blogs');
      }

      // Success!
      setOpen(false);
      setTopics(['']);
      setCategory('Technology');
      router.refresh(); // Refresh the page to show new blogs
      
      // Show success message
      alert(`Successfully generated ${data.blogs?.length || 0} blogs!`);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setGenerating(false);
      setProgress({ current: 0, total: 0 });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Sparkles className="w-4 h-4" />
          Generate Blogs with AI
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            Generate Blogs with AI
          </DialogTitle>
          <DialogDescription>
            Enter topics and category. AI will search the web and generate high-quality blog posts.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Category Selection */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory} disabled={generating}>
              <SelectTrigger id="category">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map(cat => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Topics Input */}
          <div className="space-y-2">
            <Label>Topics ({topics.length}/10)</Label>
            <div className="space-y-2">
              {topics.map((topic, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder={`Enter topic ${index + 1}...`}
                    value={topic}
                    onChange={(e) => updateTopic(index, e.target.value)}
                    disabled={generating}
                  />
                  {topics.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeTopic(index)}
                      disabled={generating}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            {topics.length < 10 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addTopic}
                disabled={generating}
                className="w-full"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Topic
              </Button>
            )}
          </div>

          {/* Progress */}
          {generating && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                <span className="text-sm font-medium text-blue-900">
                  Generating blogs... This may take a few minutes.
                </span>
              </div>
              <p className="text-xs text-blue-700">
                Processing {topics.filter(t => t.trim()).length} topics
              </p>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={generating}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleGenerate}
            disabled={generating || topics.every(t => !t.trim())}
          >
            {generating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Blogs
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

