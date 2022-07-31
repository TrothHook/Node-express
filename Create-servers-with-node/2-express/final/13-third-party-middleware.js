// We have to complete this middleware introduction

// 2 things are left --> two common questions

// *********************************************

// 1st question

// if we have access to the app.use(), can we add the middleware to the routes seperately as well?

// The answer is YES. 

// For example, we don't want to apply the app.use to all the routes . we only want to use authorize middleware function in the /api/items route

// In that case, we can just include the authorize middleware in that route seperately, so only when the client is trying to access that /api/items route, the authorize middleware will trigger and it will check for that silly query string parameter


// const express = require("express");
// const app = express();
// const logger = require("./logger");
// const authorize = require("./authorize");

// // app.use([logger, authorize]);

// app.get("/", (req, res) => {
//     res.send(`Home`);
// });

// app.get("/about", (req, res) => {
//     res.send(`About`);
// });

// app.get("/api/products", (req, res) => {
//     res.send(`Products`);
// });

// app.get("/api/items",[logger, authorize], (req, res) => {
//     console.log(req.user);
//     res.send(`Items`);
// });

// app.listen(5000, () => {
//     console.log(`Server is running at port 5000...`);
// });

// ***********************************************

// 2nd question

// What are our options when it comes to our middleware? 

// So far, we have covered the first one --> our own
// So, we can always set up our own middleware

// Our other 2 otions are express --> express provides quite a few ,built in middleware functions
// In this case, we don't have to worry about setting up the functionality. We just need to reference the docs and see what options are provided and then supply those values.

// for example: app.use(express.static("./public"));
// this is an app.use() method, now what are the arguments and app.use() method is expecting? --> It is expecting a middleware function

// So, in express we have a built in middleware known as static and the only thing this method is looking for is the public folder --> It basically places all the content of the public folder as our static assets, so they are publicly available

// THIRD PARTY middleware --> which we have to install

// Eg: 

const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

// 1.use vs. route
// 2.options - our own / express / third party

// app.use([logger, authorize]);
// app.use(express.static("./public"));

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    res.send(`Home`);
});

app.get("/about", (req, res) => {
    res.send(`About`);
});

app.get("/api/products", (req, res) => {
    res.send(`Products`);
});

app.get("/api/items", (req, res) => {
    // console.log(req.user);
    res.send(`Items`);
});

app.listen(5000, () => {
    console.log(`Server is running at port 5000...`);
});