import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_COOKIE = "mobsuccess_auth";
const AUTH_VALUE = "authenticated";

function isPublicAsset(pathname: string): boolean {
  return pathname.startsWith("/_next") || pathname.startsWith("/favicon.ico") || /\.[^/]+$/.test(pathname);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPublicAsset(pathname) || pathname.startsWith("/api/login")) {
    return NextResponse.next();
  }

  const isLoggedIn = request.cookies.get(AUTH_COOKIE)?.value === AUTH_VALUE;

  if (!isLoggedIn && pathname !== "/login") {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoggedIn && pathname === "/login") {
    const homeUrl = new URL("/", request.url);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
