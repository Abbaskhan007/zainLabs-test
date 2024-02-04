/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.hipdf.com",
      },
    ],
  },
};

export default nextConfig;
