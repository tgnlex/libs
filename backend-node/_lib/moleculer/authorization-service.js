const E = require("moleculer-web").Errors;

broker.createService({
    mixins: [ApiService],

    settings: {
        routes: [{
            // First thing
            authorization: true
        }]
    },

    methods: {
        // Second thing
        authorize(ctx, route, req, res) {
            // Read the token from header
            let auth = req.headers["authorization"];
            if (auth && auth.startsWith("Bearer")) {
                let token = auth.slice(7);

                // Check the token
                if (token == "123456") {
                    // Set the authorized user entity to `ctx.meta`
                    ctx.meta.user = { id: 1, name: "John Doe" };
                    return Promise.resolve(ctx);

                } else {
                    // Invalid token
                    return Promise.reject(new E.UnAuthorizedError(E.ERR_INVALID_TOKEN));
                }

            } else {
                // No token
                return Promise.reject(new E.UnAuthorizedError(E.ERR_NO_TOKEN));
            }
        }

    }