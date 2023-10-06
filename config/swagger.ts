export default {
    enabled: true,
    specUrl: 'docs/swagger.json',
    options: {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'My API',
                version: '1.0.0',
                description: 'API Documentation',
            },
        },
    },
}