// The second flavour, is to strictly use javascript.

// Here , we do have the form, we will still handle this form, but we will do it strictly with javascript.

// We will use javascript to send our http request

// Previously we were using form, but now we will use javascript

// Here axios is used. It is much easier to setup http request with axios instead of built in package fetch.

// Axios provides cleaner api and better error messages. using cdn to use axios in the frontend ---> it is NOT a backend project.

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

// The URL is the same (/api/people) but the method is different --> get -> Reading the data. --> post -> accessing the data

// Here we are handling the form, but we are not handling the incoming json data

// So, here another middleware will come into play

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