// The whole idea of setting up the API, is that someone is going to be using that data.

// ROUTER in Express

// The moment we are starting to have more routes and more functionality, we have another issue -> our app.js is getting very busy

// The solution is using express router -> where we can group those routes together and then as far as functionality we can set them up as separate controllers

// When we work with database, we will understand the common setup which is called as MVC

// MVC is a nicely used pattern and not a rule -> when we are setting up the API but we are missing the model part in the MVC pattern, because we haven't connected to the database.

// Here we will do copy and pasting meaning we will refactor the code. The previous setup is a perfect example to setup the ROUTER.

// ****

// Once we export the router from people.js and import it to the app.js, we will have to setup a app.use where we will mention that -> for the paths which starts with /api/people we will use the people router

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

// Now we have cleaned up our app.js -> auth.js also looks clean since it has only one post method

// But people.js still looks like a mess, since it has many routes with post methods and other routes with other methods as well.