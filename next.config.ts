import type { NextConfig } from "next";

// Check if we're running on GitHub Pages or custom domain
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = "thinker-tortoise-web";

// Check if we're using a custom domain (starts with www. or doesn't contain github.io)
const isCustomDomain = process.env.NEXT_PUBLIC_IS_CUSTOM_DOMAIN === 'true';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Only set basePath for GitHub Pages, not for custom domain
  basePath: isGithubPages && !isCustomDomain ? `/${repoName}` : "",
  // Only set assetPrefix for GitHub Pages, not for custom domain
  assetPrefix: isGithubPages && !isCustomDomain ? `/${repoName}/` : "/",
  trailingSlash: true,
  // Set environment variable for client-side usage
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages && !isCustomDomain ? `/${repoName}` : "",
    NEXT_PUBLIC_IS_CUSTOM_DOMAIN: isCustomDomain ? 'true' : 'false'
  },
};

export default nextConfig;
