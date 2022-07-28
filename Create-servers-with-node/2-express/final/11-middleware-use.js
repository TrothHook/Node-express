// Now we have our middleware fucntion, but we have 2 issues with this current set up.

// First, our app.js is getting somewhat clunky 

// It will be nicer, if we have this logger function in a seperate file

// Second, what if we have 50 more routes and we don't want to add this function manually to all of them

// It will be nicer to have a method, that will add our middleware function to any route

// We will create a new file called logger.js and put the middleware in that file. and then module.exports it

// Also we will use app.use to not write logger for every route

// In Express order matters, so we can't put the app.use after say the Home route and expect the middleware to work.

//  We need to have the middleware functions first, and only then we can have our route methods

// const { application } = require("express");
const express = require("express");
const logger = require("./logger");

const app = express();

// app.use(logger);

// We can also add a path in the app.use

app.use("/api", logger);

// if we use a path say /api, it is going to apply to both /api/products and /api/items

// Once we apply this path over here, basically it is going to apply to any route after this /api

// api/home/about/products

// If we omit the path, the middleware function will apply to all the routes

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
    res.send(`Items`);
});

app.listen(5000, () => {
    console.log(`Server is running at port 5000...`);
});


