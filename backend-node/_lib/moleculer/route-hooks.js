broker.createService({
    mixins: [ApiService],

    settings: {
        routes: [
            {
                path: "/",

                onBeforeCall(ctx, route, req, res) {
                    // Set request headers to context meta
                    ctx.meta.userAgent = req.headers["user-agent"];
                },

                onAfterCall(ctx, route, req, res, data) {
                    // Async function which return with Promise
                    return doSomething(ctx, res, data);
                }
            }
        ]
    }
});