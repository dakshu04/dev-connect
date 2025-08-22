import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
    "/",                // Landing page
    "/sign-in(.*)",     // Clerk sign in
    "/sign-up(.*)",     // Clerk sign up
])

export default clerkMiddleware(async (auth, req) => {
    const { userId } = await auth()

    // if logged in and trying to access sign-in or sign-up -> redirect to dashboard
    if(userId && isPublicRoute(req) && (req.nextUrl.pathname.startsWith("/sign-in") || req.nextUrl.pathname.startsWith("/sign-up"))) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    if(!isPublicRoute(req)) {
        // Protect everything else
        await auth.protect();
    }
}, {
    signInUrl: "/sign-in",
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}