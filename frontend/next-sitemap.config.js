/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_UTL,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/cart", "/order*", "/shipping*"],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/categories/"),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "test-bot",
        allow: ["/"],
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/cart/", "/order/", "/shipping/"],
      },
    ],
  },
};
