module.exports = {
    mixins: [ApiGateway],
    settings: {
        // Service-level option
        etag: (body) => generateHash(body)
    }
}