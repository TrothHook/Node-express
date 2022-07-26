const express = require("express");
const path = require("path");
const app = express();

// we didn't have to set up the statuses, or the content-type


// The use method is to set up the static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {

    // we will not be using res.sendFile for sending back index.html, instead we might be using it to send other things
    res.sendFile(path.resolve(__dirname + "/navbar-app/index.html"));


    // The 2 other options we might be using the most is --> 
    // adding it to the static assets
    // Server side rendering --> use template engine for that
});

app.all("*", (req, res) => {
    res.status(404).send(`<h1>resource not found</h1>`)
});


app.listen(5005, () => {
    console.log("Server is listening on port 5005");
});
