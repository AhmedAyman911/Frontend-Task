import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_ROUTES = ['/'];

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get('auth')?.value === 'true';
    const { pathname } = request.nextUrl;

    const isPublic = PUBLIC_ROUTES.includes(pathname);

    if (!isLoggedIn && !isPublic) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (isLoggedIn && pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};