import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const authToken: boolean = req.cookies.has('Authorization');
  const url = req.nextUrl.clone();

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

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/auth/sign-in', '/auth/sign-up', '/'],
};
