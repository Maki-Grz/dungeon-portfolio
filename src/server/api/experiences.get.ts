export default defineEventHandler(async (event) => {
    try {
        const response = await fetch(`http://dungeon-portfolio-api.f8chfvfrhbb0gfcb.westeurope.azurecontainer.io:8500/experiences`);

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
