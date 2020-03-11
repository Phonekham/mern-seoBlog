const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: "SEOBLOG",
    API_PRODUCTION: 'https"//nextblog.com',
    API_DEVELOPMENT: "http://localhost:8000/api",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: "http://localhost:3000",
    DOMAIN_PRODUCTION: "https://seoblog.com",
    FB_APP_ID: "522469018411253",
    DISQUS_SHORTNAME: "seoblog-16"
  }
});
