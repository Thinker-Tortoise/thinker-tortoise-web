import type { NextConfig } from "next";

// Check if we're running on GitHub Pages or custom domain
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "thinker-tortoise-web";

// Check if we're using a custom domain (starts with www. or doesn't contain github.io)
const isCustomDomain = process.env.NEXT_PUBLIC_IS_CUSTOM_DOMAIN === "true";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // Set environment variable for client-side usage
    env: {
        NEXT_PUBLIC_URL:
            isGithubPages && !isCustomDomain
                ? `https://thinker-tortoise.github.io/${repoName}`
                : process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
    },
};

export default nextConfig;
