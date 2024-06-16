module.exports = {
  siteUrl: "https://www.brickbybrick.fm", // Ensure this is updated
  generateRobotsTxt: true,
  sitemapSize: 5000, // Adjust as needed
  exclude: ["/404"], // Exclude any pages you don't want in the sitemap
  changefreq: "daily", // Adjust as needed
  priority: 0.7, // Adjust as needed
  outDir: "public", // Ensure the sitemap is generated in the public directory
  transform: async (config, path) => {
    return {
      loc: path, // Use the default path
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
