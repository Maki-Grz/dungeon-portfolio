export default defineEventHandler(async (event) => {
    try {
        const response = await fetch(`${process.env.API_URL}/experiences`);

        console.info(`Fetch status: ${response.status}`);

        if (!response.ok) {
            return new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (err: any) {
        console.error(err.message);
        throw createError({
            message: "Internal Error",
            statusCode: 500,
        });
    }
});
