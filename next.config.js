/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove assetPrefix and basePath for cPanel root domain hosting
    // If hosting in a subdirectory, uncomment and set these:
    // assetPrefix: '/subdirectory',
    // basePath: '/subdirectory',
    
    images: {
        unoptimized: true, // Required for static export
    },
    output: 'export', // Enable static HTML export
    trailingSlash: true, // Add trailing slashes for better cPanel compatibility
};

module.exports = nextConfig;