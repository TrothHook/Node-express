// Now we will write more middleware 

// First we will create an authorize.js file

const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// Middleware will also be executed in order

// So, in this case, first logger and then authorize

app.use([logger, authorize]);

// Now we will see how we can have the if condition in the middleware function

//** This is just for demonstration purposes, and this is not how we are going to authorize the users in our express application in practice */  

// This is a simple example using the query string

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