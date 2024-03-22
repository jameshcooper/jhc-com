---
layout: home

hero:
  name: Home
  tagline: Omnichannel marketing with Adobe, Customer.io and Oracle
  image:
    src: https://live.staticflickr.com/65535/52782651130_5149e24c27_z.jpg
    alt: Sydney, Australia - Freshwater Beach
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const jhc = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/693888?s=400&u=f37e69f17d467ff1b4d54e9a41953d2c483dd22e&v=4',
    name: '🇦🇺 James Cooper',
    title: 'Marketing Automation Specialist',
    links: [
      { icon: "github", link: "https://github.com/jameshcooper" },
      { icon: "facebook", link: "https://facebook.com/jameshcooper" },
      { icon: "instagram", link: "https://instagram.com/jameshcooper" },
      { icon: "twitter", link: "https://twitter.com/jameshcooper" }
    ]
  },
]
</script>

<VPTeamMembers size="small" :members="jhc" />
