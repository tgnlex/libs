const svc = broker.createService({
    mixins: [ApiService],

    settings: {
        rateLimit: {
            // How long to keep record of requests in memory (in milliseconds). 
            // Defaults to 60000 (1 min)
            window: 60 * 1000,

            // Max number of requests during window. Defaults to 30
            limit: 30,
            
            // Set rate limit headers to response. Defaults to false
            headers: true,

            // Function used to generate keys. Defaults to: 
            key: (req) => {
                return req.headers["x-forwarded-for"] ||
                    req.connection.remoteAddress ||
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress;
            },
            //StoreFactory: CustomStore
        }
    }

}); 
module.exports = class CustomStore {
    constructor(clearPeriod, opts) {
        this.hits = new Map();
        this.resetTime = Date.now() + clearPeriod;

        setInterval(() => {
            this.resetTime = Date.now() + clearPeriod;
            this.reset();
        }, clearPeriod);
    }

    /**
     * Increment the counter by key
     *
     * @param {String} key
     * @returns {Number}
     */
    inc(key) {
        let counter = this.hits.get(key) || 0;
        counter++;
        this.hits.set(key, counter);
        return counter;
    }

    /**
     * Reset all counters
     */
    reset() {
        this.hits.clear();
    }
}