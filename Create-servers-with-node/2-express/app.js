const http = require("http");

const fs = require("fs");

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

});

server.listen(5005, () => {
    console.log(`Server is listening at port 5005`);
});