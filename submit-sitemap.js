const fetch = require("node-fetch");

const submitSitemap = async () => {
  const sitemapUrl = "https://brickbybrick.fm/sitemap.xml";
  const googleUrl = `http://www.google.com/ping?sitemap=${sitemapUrl}`;

  try {
    const response = await fetch(googleUrl);
    if (response.ok) {
      console.log("Sitemap submitted successfully");
    } else {
      console.log("Failed to submit sitemap", response.statusText);
    }
  } catch (error) {
    console.error("Error submitting sitemap:", error);
  }
};

submitSitemap();
