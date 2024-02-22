class ExpressError extends Error {
    constructor(statusCode , meesage) {
        super();
        this.statusCode = statusCode;
        this.message = this.message;
    }
}

module.exports = ExpressError;