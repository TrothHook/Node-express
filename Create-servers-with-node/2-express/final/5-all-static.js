
// so, copy and paste the index.html file in the public folder as well and we wil use app.use


const express = require("express");
const path = require("path");
const app = express();

// We don't even need to setup the sendFile option
app.use(express.static("./public"));

app.all("*", (req, res) => {
    res.status(404).send(`<h1>resource not found</h1>`)
});


app.listen(5005, () => {
    console.log("Server is listening on port 5005");
});