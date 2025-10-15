import { NextRequest, NextResponse } from "next/server";

// Allow only these methods
const ALLOWED_METHODS = ["POST", "OPTIONS"];

function getBackendUrl(): string {
	const url = process.env.CHATBOT_BACKEND_URL;
	if (!url) {
		throw new Error("CHATBOT_BACKEND_URL env var is not set");
	}
	return url.replace(/\/$/, "");
}

function buildCorsHeaders(req: NextRequest): Record<string, string> {
	const origin = req.headers.get("origin") || "*";
	return {
		"Access-Control-Allow-Origin": origin,
		"Vary": "Origin",
		"Access-Control-Allow-Credentials": "true",
		"Access-Control-Allow-Methods": ALLOWED_METHODS.join(", "),
		"Access-Control-Allow-Headers": req.headers.get("access-control-request-headers") || "content-type, authorization",
	};
}

export async function OPTIONS(req: NextRequest) {
	// Handle CORS preflight
	return new NextResponse(null, { status: 204, headers: buildCorsHeaders(req) });
}

export async function POST(req: NextRequest) {
	try {
		const backendUrl = getBackendUrl();
		// Pass through the request body as-is to the backend
		const body = await req.text();

		// Forward headers selectively
		const headers: Record<string, string> = {
			"content-type": req.headers.get("content-type") || "application/json",
		};
		const auth = req.headers.get("authorization");
		if (auth) headers["authorization"] = auth;

		const response = await fetch(`${backendUrl}/ask`, {
			method: "POST",
			headers,
			body,
		});

		// Stream or buffer response transparently
		const resHeaders = new Headers();
		response.headers.forEach((value, key) => {
			// Skip hop-by-hop headers
			if (["content-length"].includes(key.toLowerCase())) return;
			resHeaders.set(key, value);
		});

		// Add CORS headers so browsers are happy if directly called
		const corsHeaders = buildCorsHeaders(req);
		Object.entries(corsHeaders).forEach(([k, v]) => resHeaders.set(k, v));

		return new NextResponse(response.body, {
			status: response.status,
			headers: resHeaders,
		});
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : "Unknown error";
		return NextResponse.json(
			{ error: "ProxyError", message },
			{ status: 500, headers: { "content-type": "application/json" } }
		);
	}
}


