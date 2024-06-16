const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "brickbybrick.fm" }],
        destination: "https://www.brickbybrick.fm/",
        permanent: true,
        statusCode: 308,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
