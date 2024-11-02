// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost', 'example.com', 'cdn.example.com'], // Resimlerin yüklenebileceği domainler
    },
  };
  
  module.exports = nextConfig;
  