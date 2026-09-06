import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdmirror.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default nextConfig;
