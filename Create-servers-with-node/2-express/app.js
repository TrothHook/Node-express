// The most basic Json response

// We will eventuall use database for this

<<<<<<< HEAD
const homePage = fs.readFileSync("./navbar-app/index.html");

const server = http.createServer((req, res) => {

    const url = req.url;
    console.log(url);
    if(url === "/") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(homePage);
        res.end();
    }
    else if(url === "/about") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<h1>This is the about page</h1>`);
        res.end();
    }
    else {
        res.writeHead(404, {"content-type": "text/html"});
        res.write(`<h1>Page not Found!</h1>`);
        res.end();
    }
=======
const express = require("express");
const { products, people } = require("./data");

const app = express();
>>>>>>> 9b7fec1f64cd82623f46499ecd3a2218ab3dde3c

app.get("/", (req, res) => {
    res.json(products);
});

//  We can see this object as json data at localhost:5005/

// We can access this data anywhere in the world. But we need middleware functions


app.listen(5005, ()=> {
console.log("Server is listening on
