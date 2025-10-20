import type { NextConfig } from "next";

// Check if we're running on GitHub Pages or custom domain
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = "thinker-tortoise-web";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages, we need to set the base path
  // For custom domain, we don't need a base path
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  basePath: isGithubPages ? `/${repoName}` : "",
  trailingSlash: true,
  // Set environment variable for client-side usage
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
};

export default nextConfig;
