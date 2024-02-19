/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["cdn.dummyjson.com"],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.dummyjson.com',
      pathname: '**',
    },],
  },
  reactStrictMode: false,
};

export default nextConfig;
