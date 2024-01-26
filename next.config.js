/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  env: {
    API_URL: "http://localhost:3005",
  },
};

module.exports = nextConfig;

