/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: false,
    },
    images: {
        unoptimized: true,
        formats: ['image/webp', 'image/avif'],
    },
};

module.exports = nextConfig;
