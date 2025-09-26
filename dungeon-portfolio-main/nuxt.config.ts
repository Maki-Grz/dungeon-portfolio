import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    srcDir: 'src/',

    modules: ['@nuxt/image', "nuxt3-leaflet", "@nuxt/fonts"],

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],

    css: ['~/assets/css/global.css'],

    devtools: {enabled: false},
    compatibilityDate: '2024-07-15',
});