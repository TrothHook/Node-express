// HTTP is the most important module

// We are going to use an abstraction on top of the HTTP module, that is by the name Express.

const http = require("http");

// 1. createServer() method

// the createServer method is looking for a callback function.

// This callback function has 2 parameters. Both of these parameters are objects. We can call them whatever we want, it is common practice to call them req, res

// The first parameter represents the incoming request.

// Example: A client is requesting from the web browser to my webpage. So, we will have info about methods and other properties in the request object

// The second parameter --> response is what my webpage will send back

// req is a giant object with a bunch of useful methods, like --> .write(), .end()

// ***********************************************

// const server = http.createServer((req, res) => {

//     res.write("Welcome to our homepage");
//     res.end();

// });

// server.listen(5005);

// ************************************************

const server = http.createServer((req, res) => {

    if(req.url === "/"){
        res.end(`Welcome to this webpage`)
    }
    else if(req.url === "/about") {
        res.end(`Here is our short history`)
    }

    // Next we are trying to access a page that we don't have

    // setting up a default response
    else {
    res.end(`
    <h1>Oops!</h1>

    <p>We can't seem to find the page you are looking for</p>

    <a href="/">Back Home</a>
    `);
    }

});

server.listen(5005);