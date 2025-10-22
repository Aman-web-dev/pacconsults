import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// The updateSession function is the core logic for session management in middleware.
export async function updateSession(request: NextRequest) {
  try {
    // 1. Create a base response object.
    // The Supabase client will attach the refreshed session cookies to this response.
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })

    // 2. Create the Supabase client for the server (edge environment).
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          // Functions to get, set, and remove cookies are essential for the client
          // to read the current session (from the request) and write the new session
          // (to the response headers).
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            request.cookies.set({ name, value, ...options })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            // Set the cookie on the response as well so the browser gets the update
            response.cookies.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            request.cookies.set({ name, value: '', ...options })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            // Remove the cookie from the response
            response.cookies.set({ name, value: '', ...options })
          },
        },
      }
    )

    // 3. This call is the key. It attempts to get the user session.
    // If the access token is expired but the refresh token is valid, 
    // it will automatically refresh the session, and the new cookies 
    // will be set via the `set` function above, updating the `response` object.
    await supabase.auth.getUser()

    // 4. Return the response with the refreshed cookies (if any).
    return response

  } catch (e) {
    // This is a common pattern for handling issues in the middleware,
    // such as a missing SUPABASE_URL or ANON_KEY.
    // In a real application, you might want more specific error logging.
    console.error('Supabase middleware error:', e)
    return NextResponse.next({
        request: {
            headers: request.headers,
        },
    })
  }
}