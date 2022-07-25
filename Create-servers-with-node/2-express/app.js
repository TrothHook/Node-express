const express = require("express");
const path = require("path");
const app = express();

// we didn't have to set up the statuses, or the content-type


// The use method is to set up the static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/navbar-app/index.html"));
});

app.all("*", (req, res) => {
    res.status(404).send(`<h1>resource not found</h1>`)
});


app.listen(5005, () => {
    console.log("Server is listening on port 5005");
});