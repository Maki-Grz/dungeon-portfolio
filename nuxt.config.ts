import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    srcDir: 'src/',
    serverDir: 'src/server/',

    modules: ['@nuxt/image', '@nuxt/fonts'],

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    css: ['~/assets/css/global.css', 'leaflet/dist/leaflet.css'],

    image: {
        domains: [
            'ghost.paladium-pvp.fr',
            'cdn.maxgrz.fr',
            'www.km0.info',
            'www.rust-lang.org',
            'nubiapage.com',
            'atlasps.com',
            'www.miramas.fr',
            'www.hauts-de-seine.fr',
        ],
    },

    devtools: {enabled: false},
    compatibilityDate: '2024-07-15',
});