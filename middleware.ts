import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const authToken: boolean = req.cookies.has('Authorization');
  const url = req.nextUrl.clone();

  // auth validation and redirects
  if (
    !authToken &&
    !req.nextUrl.pathname.startsWith('/auth') &&
    req.nextUrl.pathname !== '/'
  ) {
    url.pathname = '/auth/sign-in';
    return NextResponse.redirect(url);
  }

  if (authToken && req.nextUrl.pathname.startsWith('/auth')) {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  if (authToken && req.nextUrl.pathname === '/') {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // Store current request url in a custom header, which you can read later for pathname in SSR
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-url', req.url);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ['/dashboard', '/auth/sign-in', '/auth/sign-up', '/'],
};
