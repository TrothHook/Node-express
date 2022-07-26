// The most basic Json response

// We will eventuall use database for this

const express = require("express");
const { products, people } = require("./data");

const app = express();

app.get("/", (req, res) => {
    res.json(products);
});

//  We can see this object as json data at localhost:5005/

// We can access this data anywhere in the world. But we need middleware functions


app.listen(5005, () => {
    console.log("Server is listening on port 5005");
});