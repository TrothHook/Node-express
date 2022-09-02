// Now we have cleaned up our app.js -> auth.js also looks clean since it has only one post method

// But people.js still looks like a mess, since it has many routes with post methods and other routes with other methods as well.

// A better setup will be if we are able to split the people.js various functionality into separate files. -> that is split the functions

// Say, we will only have a router, then we are going to setup our method (get, post, put, delete) , then we are still going to have the route but the functionality or the controller is going to be in a separate file. -> with this mess will become a lot cleaner

// We will create folder where app.js is there. We will call this folder "controllers" -> for the reason that there is a pattern called MVC (Model View Controller)

const express = require("express");
const app = express();

const people = require("./routes/people");

const auth = require("./routes/auth");

// Static assets

app.use(express.static("./methods-public"));

// Parse form data

app.use(express.urlencoded({extended: false}));

// parse incoming json data

app.use(express.json());

app.use("/api/people", people);

app.use("/login", auth);

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});