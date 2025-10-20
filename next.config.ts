import type { NextConfig } from "next";

// Check if we're running on GitHub Pages or custom domain
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // Set environment variable for client-side usage
    env: {
        NEXT_PUBLIC_URL: isGithubPages
            ? `https://thinker-tortoise.github.io/thinker-tortoise-web`
            : "",
    },
};

export default nextConfig;
