const ApiGateway = require("moleculer-web");

module.exports = {
    mixins: [ApiGateway],
    settings: {
        port: 8443,

        // HTTPS server with certificate
        https: {
            key: fs.readFileSync("key.pem"),
            cert: fs.readFileSync("cert.pem")
        },

        // Use HTTP2 server
        http2: true
    }
});