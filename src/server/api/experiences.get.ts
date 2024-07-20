export default defineEventHandler(async (event) => {
    try {
        return await $fetch(`${process.env.API_URL}/experiences`, {
            headers: {"Content-Type": "application/json"},
        });
    } catch (err) {
        throw createError({
            message: "Authorization Failed",
            statusCode: 401,
        });
    }
});