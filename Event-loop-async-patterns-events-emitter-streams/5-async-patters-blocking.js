// const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

    // In this callback func. we are going to check for the URL.

    // Even if we try to access a different resource, we are still blocked by other user, if he or she is requesting a resource where it has a blocking code

    if (req.url === "/") {
        res.end(`
        <h1>Hello World</h1>
        <h3>This is the Homepage</h3>
        `);
    }

    // SETTING UP A BLOCKING CODE BEFORE ABOUT --> Nested for loop

    for(let i = 0; i < 1000; i++) {
        for(let j = 0; j < 1000; j ++) {
            console.log(`${i} ${j}`);
        }
    }

    if (req.url === "/about") {
        res.end(`
        <h1>This is the About Page</h1>
        `);
    }
    else {
        res.end(`
    <h1>OOops!</h1>    
    <h3>There is no page here!</h3>
    <a href="/">GO back to the Hompage</a>
    `);
    }
});

server.listen(5001, () => {
    console.log("The server is listening on port 5001");
});