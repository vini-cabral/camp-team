/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    domains: ["randomuser.me"],
  },
};

module.exports = nextConfig;
