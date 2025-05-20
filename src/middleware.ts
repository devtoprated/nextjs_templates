import { type NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { pathToRegexp } from "path-to-regexp";

const authRoutes = {
  protected: [
    "/property-search/:path*",
    "/projects/:path*",
    "/invite/:path*",
    "/create-project/:path*",
    "/join-project/:path*",
    "/choose-create-join-project/:path*",
  ],
  public: ["/"],
};

const matcher = (urls: string[], reqUrl: string): boolean => {
  const regexps = urls.map((url) => pathToRegexp(url));
  const matched = regexps.map((regexp) => {
    if (regexp.exec(reqUrl)) {
      return true;
    }
    return false;
  });
  return matched.includes(true);
};

export async function middleware(req: NextApiRequest) {
  const isAuthenticated = await getToken({ req: req });
  const url = new URL(req.url as string);
  if (!isAuthenticated && matcher(authRoutes.protected, url.pathname)) {
    const redirectUrl = new URL("/", req.url);
    if (url.pathname.startsWith("/invite")) {
      redirectUrl.searchParams.append("login", "true");
      redirectUrl.searchParams.append("redirect", url.pathname);
    }
    return NextResponse.redirect(redirectUrl);
  }
}

export const config = {
  matcher: [
    "/property-search/:path*", // match all routes that start
    "/projects/:path*",
    "/invite/:path*",
    "/create-project/:path*",
    "/join-project/:path*",
    "/choose-create-join-project/:path*",
  ],
};
