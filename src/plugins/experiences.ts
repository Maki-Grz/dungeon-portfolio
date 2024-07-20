export default defineNuxtPlugin(async () => {
    const NUXT_API_URL = "/api/experiences";
    const GET_EXPERIENCES = await $fetch(NUXT_API_URL, {});
    return {
        provide: {
            experiences: () => GET_EXPERIENCES,
        }
    }
});