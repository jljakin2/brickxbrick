module.exports = {
  siteUrl: "https://brickbybrick.fm", // Replace with your site URL
  generateRobotsTxt: true,
  sitemapSize: 5000, // Adjust as needed
  exclude: ["/404"], // Exclude any pages you don't want in the sitemap
  changefreq: "daily", // Adjust as needed
  priority: 0.7, // Adjust as needed
  outDir: "public", // Ensure the sitemap is generated in the public directory
  transform: async (config, path) => {
    // Customize the URLs if needed
    return {
      loc: path, // Use the default path
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  // additionalPaths: async (config) => [
  //   await config.transform(config, "/additional-page"), // Add additional pages if needed
  // ],
};
