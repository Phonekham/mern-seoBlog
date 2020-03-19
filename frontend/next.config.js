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
    DISQUS_SHORTNAME: "seoblog-16",
    GOOGLE_CLIENT_ID:
      "946656261581-kjub4621een7alp6tkktn5dq6h6qgkv9.apps.googleusercontent.com"
  }
});
