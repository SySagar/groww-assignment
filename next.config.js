/** @type {import('next').NextConfig} */
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
  };
  
  module.exports = nextConfig;