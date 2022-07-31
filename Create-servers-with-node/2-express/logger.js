const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    const status = res.statusCode;
    console.log(method, url, status, time);
    next();
}

module.exports = logger;