broker.createService({
    mixins: [ApiService],

    settings: {
        routes: [{
            path: "/api",

            whitelist: [
                // Access any actions in 'posts' service
                "posts.*",
                // Access call only the `users.list` action
                "users.list",
                // Access any actions in 'math' service
                /^math\.\w+$/
            ]
        }]
    }
});