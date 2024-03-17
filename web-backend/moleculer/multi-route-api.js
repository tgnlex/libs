broker.createService({
    mixins: [ApiService],

    settings: {
        routes: [
            {
                path: "/admin",

                authorization: true,

                whitelist: [
                    "$node.*",
                    "users.*",
                ],

                bodyParsers: {
                    json: true
                }
            },
            {
                path: "/",

                whitelist: [
                    "posts.*",
                    "math.*",
                ],

                bodyParsers: {
                    json: true
                }
            }
        ]
    }
});