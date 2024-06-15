// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.js or a specific page/component
export default defineNuxtConfig({
    srcDir: 'src/',
    devServer: {
        port: 5000
    },
    modules: ['@nuxt/image', "nuxt3-leaflet", "@nuxt/fonts"],
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    css: ['~/assets/scss/global.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/_variables.scss" as *;',
                },
            },
        },
    },
    devtools: {enabled: false},
});