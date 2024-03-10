module.exports = {
    mixins: [ApiGateway],

    settings: {
        routes: [
            {
                path: "/api",

                whitelist: [
                    "v2.posts.*",
                    "test.*"
                ],

                aliases: {
                    "GET /hi": "test.hello"
                },

                autoAliases: true
            }
        ]
    }
};dddddddddwwwwwwwwwwwwwwwwwwww