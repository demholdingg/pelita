/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["gsap", "react-globe.gl", "three"],
  // Standalone output ensures efficient, lightweight containerization
  // for your self-hosted Docker infrastructure.
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
