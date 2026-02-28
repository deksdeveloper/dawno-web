import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/dawno-web",
    assetPrefix: "/dawno-web/",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
