/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ecommerce0063.s3.ap-south-1"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "ecommerce0063.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
