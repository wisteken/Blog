// eslint-disable-next-line no-undef
module.exports = {
  siteUrl: 'https://www.wisteken.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/search', '/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.wisteken.com/server-sitemap.xml', // <==== Add here
    ],
  },
}
