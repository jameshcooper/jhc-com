import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: "en-AU",
  title: "James Cooper",
  description: "Trail running, digital marketing, technology",
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: "Welcome", link: "/", activeMatch: '^/$|^/' }
    ],
  },
});
