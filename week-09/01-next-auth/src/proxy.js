import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'



//ClerkMiddlewear will have a list of routes that are protected
const isProtectRoute = createRouteMatcher(["/timeline", "/profile/(.*)"]);
//--> routes you want to protect = only custom parts


//clerkMiddlewwear will compare the route from the list an the currnet route the user is navigating to 
//--> if the current route matches one form the list, it will trigger auth check
export default clerkMiddleware(

    async(auth, req)=> {
        if (isProtectRoute(req)) await auth.protect();
    }
);


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}