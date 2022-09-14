const CustomAPIError = require("./custom-api");
const BadRequestError = require("./unauthenticated");
const NotFoundError = require("./not-found");
const UnauthenticatedError = require("./unauthenticated");

module.exports = {
    CustomAPIError,
    BadRequestError,
    NotFoundError,
    UnauthenticatedError,
}