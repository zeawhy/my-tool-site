import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The HEIC→JPG converter lives at `/` (and `/en`); the guessed
      // `/heic-to-jpg` path never existed as a route, but external links
      // and old internal links pointed at it, so Google reported it as
      // a 404 in Search Console. Redirect it to the homepage instead.
      { source: "/heic-to-jpg", destination: "/", permanent: true },
      { source: "/en/heic-to-jpg", destination: "/en", permanent: true },
    ];
  },
};

export default nextConfig;
