/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "https://sangyoon-kim1804.github.io/labs-renewal";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/labs-renewal",
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  /*assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://sangyoon-kim1804.github.io/labs-renewal"
      : "",  */
  images: {
    loader: 'imgix',
    unoptimized : true,
    path: 'https://sangyoon-kim1804.github.io/labs-renewal',
  },
}

module.exports = nextConfig
