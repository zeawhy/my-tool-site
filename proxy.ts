import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Detect locale from the URL path and expose it to server components via
// request headers, so <html lang> and hreflang stay correct without any
// client-side language state (crawlers never click a toggle).
export default function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-locale", isEn ? "en" : "zh-CN");
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
