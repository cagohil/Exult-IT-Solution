import type { NextConfig } from "next";
import { randomBytes } from "node:crypto";

// Signs the fallback math captcha. A configured CAPTCHA_SECRET wins; otherwise each build
// gets its own random secret, shared by every server function of that deploy. It is only
// read from server code (src/lib/server/captcha.ts), so it never reaches the browser bundle.
const captchaBuildSecret = process.env.CAPTCHA_SECRET || randomBytes(32).toString("hex");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Keep the legacy URL shape (/services/website-development/) so existing links and rankings survive.
  trailingSlash: true,
  reactStrictMode: true,
  env: { CAPTCHA_BUILD_SECRET: captchaBuildSecret },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
