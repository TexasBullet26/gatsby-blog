const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Software developer, Writer, Learner, Athlete, and much more!", // <title>
  shortSiteTitle: "Trey Lanzer Personal Blog", // <title> ending for posts and pages
  siteDescription: "Blog by Trey Lanzer",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Trey Lanzer",
  authorTwitterAccount: "LanzerTrey26",
  // info
  infoTitle: "Trey Lanzer",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - Trey Lanzer's Blog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "lanzertrey@google.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/TexasBullet26" },
    { name: "twitter", url: "https://twitter.com/LanzerTrey26" },
    { name: "facebook", url: "http://facebook.com/trey.lanzer" }
  ]
};
