// Will not use filesystem --> storing data in seperate files and working with them to understand GET, POST, PUT, DELETE methods

// Becasue, eventually we will work with the database , so we have to know the methods which is used to connect with the database.

const express = require("express");
const app = express();




app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});