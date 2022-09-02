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
        return res.status(404).json({success:false, msg: `please provide name value`});
    }

    res.status(201).json({success: true, person:name});
});

// trying out another route

app.post("/api/postman/people", (req, res) => {

    const {name} = req.body;

    if(!name) {
        return res.status(404).json({success:false, msg:"please provide a valid name"});
    }

    res.status(201).json({success: true, data:[...people, name]});

});

app.post("/login", (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }

    res.status(401).send(`Please provide valid credentials`);
});

// After POST, now lets work on the other two methods

app.put("/api/people/:id", (req, res) => {

    const {id} = req.params;

    const {name} = req.body;

    // console.log(id, name);

    // res.send("Hello world");

    const person = people.find((person) => person.id === Number(id));

    if(!person) {
        return res.status(404).json({success:false, msg:`no person with id ${id}`});
    }

    const newPerson = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }

        return person
    })

    res.status(200).json({success:true, data:newPerson});

});

// The last method is delete

// THe setup is similar to PUT, only difference is that when we are deleting, we are not expecting anything in the body

// Even with the same path, if the method is different, it will be a completely different request handling

app.delete("/api/people/:id", (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if(!person) {
        return res.status(404).json({success:false, msg:`no person with id ${req.params.id}`});
    }

    const newPerson = people.filter((person) => person.id !== Number(req.params.id));

    return res.status(200).json({success:true, data:newPerson});

});

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});