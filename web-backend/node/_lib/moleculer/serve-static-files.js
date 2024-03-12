broker.createService({
    mixins: [ApiService],

    settings: {
        assets: {
            // Root folder of assets
            folder: "./assets",

            // Further options to `serve-static` module
            options: {}
        }		
    }
});