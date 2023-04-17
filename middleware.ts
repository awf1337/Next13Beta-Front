import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const authToken: boolean = req.cookies.has('Authorization');
  const url = req.nextUrl.clone();
  url.pathname = '/auth/sign-in';

  if (
    !authToken &&
    !req.nextUrl.pathname.startsWith('/auth') &&
    req.nextUrl.pathname !== '/'
  ) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'],
};
