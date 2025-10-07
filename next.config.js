const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? '/NextJS-Tailwind-Course-Landing-Page/' : '',
    basePath: isProd ? '/NextJS-Tailwind-Course-Landing-Page' : '',
    images: {
        unoptimized: true,
    },
    output: 'export',
};

module.exports = nextConfig;