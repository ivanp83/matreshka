// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: "https://matryoshkaflowers.ru",
//   changefreq: "daily",
//   priority: 0.7,
//   sitemapSize: 5000,
//   generateRobotsTxt: true,
//   exclude: ["/cart", "/order*", "/shipping*"],

//   transform: async (config, path) => {
//     return {
//       loc: path,
//       changefreq: config.changefreq,
//       priority: config.priority,
//       lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
//       alternateRefs: config.alternateRefs ?? [],
//     };
//   },
//   additionalPaths: async (config) => [
//     await config.transform(config, "/categories/"),
//   ],
//   robotsTxtOptions: {
//     policies: [
//       {
//         userAgent: "*",
//         allow: "/",
//       },
//       {
//         userAgent: "test-bot",
//         allow: ["/"],
//       },
//       {
//         userAgent: "black-listed-bot",
//         disallow: ["/cart/", "/order/", "/shipping/"],
//       },
//     ],
//   },
// };

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://matryoshkaflowers.ru",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/cart", "/order*", "/shipping*"],

  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/categories?id=0"),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/categories?id=0",
          "/info",
          "/about",
          "/product",
          "/contacts",
        ],
      },
      {
        userAgent: "test-bot",
        allow: [
          "/",
          "/categories?id=0",
          "/info",
          "/about",
          "/product",
          "/contacts",
        ],
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/cart", "/order", "/shipping"],
      },
    ],
  },
};
