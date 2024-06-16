const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.brickbybrick.fm", // Redirect to the preferred URL
        permanent: true,
        statusCode: 308, // Use 308 Permanent Redirect
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
