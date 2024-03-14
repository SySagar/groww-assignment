/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "groww.in",
          port: "",
          pathname: "/**",
        },
      ],
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, './'),
        "@components": path.resolve(__dirname, './app/components'),
        "@layout": path.resolve(__dirname, './app/layout'),
        "@store": path.resolve(__dirname, './app/store'),
        "@lib": path.resolve(__dirname, './app/lib'),
      };
  
      return config;
    },
  };
  
  module.exports = nextConfig;