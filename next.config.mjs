/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["beta-api.bachlongmobile.com", "old.bachlongmobile.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "old.bachlongmobile.com",
        pathname: "/media/catalog/product/**",
      },
    ],
  },
};

export default nextConfig;
