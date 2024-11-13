module.exports = {
  siteUrl: "https://wojplot.pl",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.8,
  transform: async (config, path) => {
    const priorityMap = {
      "/": 1.0,
      "/balustrady": 0.8,
      "/bramy": 0.8,
      "/ogrodzenia": 0.8,
      "/furtki": 0.8,
      "/konstrukcje": 0.8,
      "/meble": 0.8,
    };

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: config.changefreq,
      priority: priorityMap[path] || config.priority,
    };
  },
};
