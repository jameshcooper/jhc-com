import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-AU",
  title: "jameshcooper.com",
  titleTemplate: ":title - Omnichannel marketing",
  description: "Adobe Campaign, Customer.io, Oracle Responsys",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.png",
      },
    ],
  ],
  themeConfig: {
    nav: [{ text: "Home", link: "/", activeMatch: "^/$|^/" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/jameshcooper" },
      { icon: "facebook", link: "https://facebook.com/jameshcooper" },
      { icon: "instagram", link: "https://instagram.com/jameshcooper" },
      { icon: "twitter", link: "https://twitter.com/jameshcooper" },
    ],
  },
});