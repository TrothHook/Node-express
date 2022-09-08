
const {CustomAPIError} = require("../errors/custom-error");

const login = async (req, res) => {

    const {username, password} = req.body;

    // We have three ways to check for empty request (no username and/or password is provided)
    // mongoose validation -> when we connect to the database
    // Joi -> separate package for another validation layer
    // in this case we will check in the controller for it manually -> we have this package that wraps all of our routes and we simply want to throw an error. What error? Our custom one

    if(!username || !password) {
        throw new CustomAPIError("Please provide email and passowrd", 400)
    }

    res.send(`Fake Login/Register/Signup Route`);
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({msg:`Hello, John Doe`, secret: `Here is your authorized data your lucky number is ${luckyNumber}`});
}

module.exports = {
    login,
    dashboard
}