import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    sassOptions: {
        implementation: 'sass-embedded',
    },
};

export default nextConfig;
