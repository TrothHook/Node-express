// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(`user hit the server`);
//     res.end(`
//     <h1>Hello World</h1>
//     `);

//     // The server is up and running, but there is no info about the response messages. We need to provide the meta info to the browser about what we are sending back

//     // The way we provide more info is we provide more methods

// });

// server.listen(5005, () => {
//     console.log(`Server is listening at port 5005`);
// });

// ***********************************************

// Providing headers


// const http = require("http");

// const server = http.createServer((req, res) => {

//     // Mime type or media type

//     res.writeHead(200, {"content-type": "text/html"});
//     res.write(`<h1>Hello World</h1>`);
//     res.end();

// });

// server.listen(5005, () => {
//     console.log(`Server is listening at port 5005`);
// });

// *************************************************


const http = require("http");

const fs = require("fs");

// get all files

const homePage = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {

    // console.log(req); // A massive object
    // console.log(req.method); // We get GET in the console

    // console.log(req.url);

    const url = req.url;

    // home page
    if(url === "/") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(homePage);
        res.end();
    }
    
    // about page
    else if(url === "/about") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<h1>This is the about page</h1>`);
        res.end();
    }

    // 404 Error
    else {
        res.writeHead(404, {"content-type": "text/html"});
        res.write(`<h1>Page not Found!</h1>`);
        res.end();
    }

});

server.listen(5005, () => {
    console.log(`Server is listening at port 5005`);
});
