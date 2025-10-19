import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "thinker-tortoise-web";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: isGithubActions ? `/${repoName}/` : undefined,
  basePath: isGithubActions ? `/${repoName}` : undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repoName}` : "",
  },
};

export default nextConfig;
