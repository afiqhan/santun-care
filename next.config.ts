import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = "santun-care"; // Gantikan jika nama repositori GitHub anda berbeza

const nextConfig: NextConfig = {
  output: "export", // Menjana fail HTML statik
  images: {
    unoptimized: true, // Diperlukan untuk persekitaran statik GitHub Pages
  },
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
};

export default nextConfig;