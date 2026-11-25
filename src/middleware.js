import { NextResponse } from 'next/server';

// Pages that need a signed-in visitor. The cookie is set by AuthContext after login.
// When your backend is ready, verify the token here (or switch to an httpOnly session cookie).
export function middleware(request) {
  const token = request.cookies.get('tf_auth')?.value;
  if (token) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = '/login';
  url.search = `?next=${encodeURIComponent(request.nextUrl.pathname)}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/projects/:path*', '/certificates/:path*', '/payment/:path*'],
};
