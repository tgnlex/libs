broker.createService({
    mixins: ApiGatewayService,

    settings: {
        routes: [{
            // Enable authentication
            authentication: true
        }]
    },

    methods: {
        authenticate(ctx, route, req, res) {
            let accessToken = req.query["access_token"];
            if (accessToken) {
                if (accessToken === "12345") {
                    // valid credentials. It will be set to `ctx.meta.user`
                    return Promise.resolve({ id: 1, username: "john.doe", name: "John Doe" });
                } else {
                    // invalid credentials
                    return Promise.reject();
                }
            } else {
                // anonymous user
                return Promise.resolve(null);
            }
        }
    }
});