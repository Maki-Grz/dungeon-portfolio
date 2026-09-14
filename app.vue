<template>
  <NuxtPage/>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: '%s | Maximilien Grzeczka',
  meta: [
    {charset: 'utf-8'},
    {
      name: 'description',
      content: 'Maximilien Grzeczka, AI Engineer and Full Stack Rust/SAP Developer in Chantilly and Paris. Explore my projects, writing and experience.'
    },
    {name: 'author', content: 'Maximilien Grzeczka'},
    {name: 'keywords', content: 'Maximilien Grzeczka, AI Engineer, Rust, SAP, SAP BTP, generative AI, full stack developer, Chantilly, Paris'},
    {name: 'theme-color', content: '#e7d6c2'},
    {name: 'robots', content: 'index, follow'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {property: 'og:title', content: 'Maximilien Grzeczka | AI Engineer & Full Stack Rust/SAP Developer'},
    {property: 'og:type', content: 'website'},
    {
      property: 'og:description',
      content: 'AI Engineer and Full Stack Rust/SAP Developer in Chantilly and Paris.'
    },
    {property: 'og:locale', content: 'fr_FR'},
    {property: 'og:site_name', content: 'Maximilien Grzeczka'},
    {property: 'og:image', content: 'https://www.maxgrz.fr/images/map.jpg'},
    {property: 'og:url', content: 'https://www.maxgrz.fr'},
    {property: 'twitter:card', content: 'summary_large_image'},
    {property: 'twitter:url', content: 'https://www.maxgrz.fr'},
    {
      property: 'twitter:description',
      content: 'AI Engineer and Full Stack Rust/SAP Developer in Chantilly and Paris.'
    },
    {property: 'twitter:image', content: 'https://www.maxgrz.fr/images/map.jpg'},
    {property: 'twitter:site', content: '@Maki_Grz'},
    {property: 'twitter:creator', content: '@Maki_Grz'},
    {property: 'twitter:title', content: 'Maximilien Grzeczka | AI Engineer & Full Stack Rust/SAP Developer'}
  ],
  link: [
    {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
  ]
})
</script>