/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/labs-renewal",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://sangyoon-kim1804.github.io/labs-renewal"
      : "",  
}

module.exports = nextConfig
