// Will not use filesystem --> storing data in seperate files and working with them to understand GET, POST, PUT, DELETE methods

// Becasue, eventually we will work with the database , so we have to know the methods which is used to connect with the database.

// ****************************************************

// GET --> Read Data

// const express = require("express");
// const app = express();

// let { products, people } = require("./data");

// // Default method that the browser performs. When we set up a request with our browser, we right away use the http verb by the name of get and that is how we can read the data.

// app.get("/api/people", (req, res) => {
//     res.status(200).json({success: true, data: people});
// });


// app.listen(5000, () => {
//     console.log("Server is listening on port 5000...");
// });

// *************************************************

// Now we will add data on to the server

// POST --> Insert Data

// 2 Kinds of POST

// *******

// FORM Example.

// const express = require("express");
// const app = express();

// let { products, people } = require("./data");

// // The methods-public folder and its content is set up so that we can understand other methods especially the POST method.

// // As, we cannot simply perform a POST request from the browser

// // First, setting up the methods-public as our public folder containing static assets

// app.use(express.static("./methods-public"));

// // Inorder to get the form data / parse form data
// // We need to go with URL encoded middleware

// // This is going to parse the data, and add the data to the req.body

// app.use(express.urlencoded({extended: false}));

// // urlencoded is based on the body parser, so in the previous versions of express, we had to install the body-parser, but with the later versions of express, it comes built in

// app.get("/api/people", (req, res) => {
//     res.status(200).json({success: true, data: people});
// });

// app.post("/login", (req, res) => {
//     console.log(req.body);
//     res.send(`POST`);
// });

// app.listen(5000, () => {
//     console.log("Server is listening on port 5000...");
// });

// ********

// Javascript example

const express = require("express");
const app = express();

let { products, people } = require("./data");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({extended: false}));

app.get("/api/people", (req, res) => {
    res.status(200).json({success: true, data: people});
});

app.post("/login", (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }

    res.status(401).send(`Please provide valid credentials`);
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});