
require("dotenv").config();

const jwt = require("jsonwebtoken");

const {BadRequestError} = require("../errors");

const login = async (req, res) => {

    const {username, password} = req.body;

    // We have three ways to check for empty request (no username and/or password is provided)
    // mongoose validation -> when we connect to the database
    // Joi -> separate package for another validation layer
    // in this case we will check in the controller for it manually -> we have this package that wraps all of our routes and we simply want to throw an error. What error? Our custom one

    if(!username || !password) {
        throw new BadRequestError("Please provide email and passowrd")
    }

    // just for demo, normally provided by the DB

    const id = new Date().getDate();

    // try to keep the payload small, better experience for user (for people with poor internet connection)
    // just for demo, in production use long , complex and unguessable string value

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:"30d"});

    res.status(200).json({msg:`user created`, token});
}

// const dashboard = async (req, res) => {
    
//     const authHeader = req.headers.authorization;

//     if(!authHeader || !authHeader.startsWith("Bearer")) {
//         throw new CustomAPIError(`No token provided`, 401);
//     }

//     const token =  authHeader.split(" ")[1];
    
//     // Verify if the token we got back from the front-end is valid or not.

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         console.log(decoded);

//         const luckyNumber = Math.floor(Math.random() * 100);

//         res.status(200).json({msg:`Hello, ${decoded.username}`, secret: `Here is your authorized data your lucky number is ${luckyNumber}`});
//     } catch (error) {
//         throw new CustomAPIError(`Not authorized to access this route`, 401);
//     }

// }
const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random() * 100);

        res.status(200).json({msg:`Hello, ${req.user.username}`, secret: `Here is your authorized data your lucky number is ${luckyNumber}`});

}

module.exports = {
    login,
    dashboard
}