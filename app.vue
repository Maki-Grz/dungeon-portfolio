<template>
  <NuxtPage/>
</template>

<script lang="ts" setup>
useHead({
  title: 'Maximilien Grzeczka - Dungeon Portfolio',
  meta: [
    {charset: 'utf-8'},
    {
      name: 'description',
      content: 'Welcome to my portfolio! I\'m a full stack web developer. Discover my awesome skills and projects showcased in an interactive map that draws inspiration from the legendary Minecraft Dungeon!'
    },
    {name: 'author', content: 'Maximilien Grzeczka'},
    {name: 'keywords', content: 'maximilien grzeczka, developer, chantilly, website, freelance, application, software, full stack, dungeon, paladium, modded, minecraft'},
    {name: 'theme-color', content: '#e7d6c2'},
    {name: 'robots', content: 'index, follow'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'},
    {property: 'og:type', content: 'website'},
    {
      property: 'og:description',
      content: 'Welcome to my portfolio! I\'m a full stack web developer. Discover my awesome skills and projects showcased in an interactive map that draws inspiration from the legendary Minecraft Dungeon!'
    },
    {property: 'og:locale', content: 'fr_FR'},
    {property: 'og:site_name', content: 'Maximilien Grzeczka - Dungeon Portfolio'},
    {property: 'og:image', content: 'https://www.maxgrz.fr/images/map.jpg'},
    {property: 'og:url', content: 'https://www.maxgrz.fr'},
    {property: 'twitter:card', content: 'summary_large_image'},
    {property: 'twitter:url', content: 'https://www.maxgrz.fr'},
    {
      property: 'twitter:description',
      content: 'Welcome to my portfolio! I\'m a full stack web developer. Discover my awesome skills and projects showcased in an interactive map that draws inspiration from the legendary Minecraft Dungeon!'
    },
    {property: 'twitter:image', content: 'https://www.maxgrz.fr/images/map.jpg'},
    {property: 'twitter:site', content: '@Maki_Grz'},
    {property: 'twitter:creator', content: '@Maki_Grz'},
    {property: 'twitter:title', content: 'Maximilien Grzeczka - Dungeon Portfolio'}
  ],
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  ]
})
</script>