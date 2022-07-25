const http = require("http");

const fs = require("fs");

// get all the files
const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyles = fs.readFileSync("./navbar-app/styles.css");
const homeScript = fs.readFileSync("./navbar-app/app.js");

const server = http.createServer((req, res) => {

    const url = req.url;
    // console.log(url);

    // Homepage
    if(url === "/") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(homePage);
        res.end();
    }

    // About page
    else if(url === "/about") {
        res.writeHead(200, {"content-type": "text/html"});
        res.write(`<h1>This is the about page</h1>`);
        res.end();
    }

    // styles
    else if(url === "/styles.css") {
        res.writeHead(200, {"content-type": "text/css"});
        res.write(homeStyles);
        res.end();
    }

    // script logic
    else if(url === "/app.js") {
        res.writeHead(200, {"content-type": "text/javascript"});
        res.write(homeScript);
        res.end();
    }

    // 404
    else {
        res.writeHead(404, {"content-type": "text/html"});
        res.write(`<h1>Page not Found!</h1>`);
        res.end();
    }

});

server.listen(5005, () => {
    console.log(`Server is listening at port 5005`);
});