// We are familiar with 2 ways with which we can sned a POST request

// 1. How we can do that using the Form
// 2. How we can do it using the straight up http request , in our case using javascript

// But there is a major problem in our current setup. The problem is the following:-

// If we need to create a front end to test something for every route our development, is going to be extremely slow

// It is probably going to take us way longer just to set up a frontend than setting up just one simple route . 

// So, everytime we set up a route, we are going to spend 5 - 6x times more on setting up the frontend where we can test that route

// So, we will use a tool called POSTMAN

// POSTMAN is an awesome tool to quickly test our APIs


const express = require("express");
const app = express();

let { products, people } = require("./data");

// Static assets

app.use(express.static("./methods-public"));

// Parse form data

app.use(express.urlencoded({extended: false}));

// parse incoming json data

app.use(express.json());

app.get("/api/people", (req, res) => {
    res.status(200).json({success: true, data: people});
});


app.post("/api/people", (req, res) => {
    const {name} = req.body;

    if(!name) {
        return res.status(400).json({success:false, msg: `please provide name value`});
    }

    res.status(201).json({success: true, person:name});
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