// Practical example

// pipe method pushes data from the readStream into the writeStream. We can read data in chunks and write data in chunks as well

// Under the hood --> response object can be set up a writeable stream

var http = require("http");

var { readFileSync, createReadStream } = require("fs");
const { Stream } = require("stream");

http.createServer((req, res) => {
    // const text = readFileSync("./content/big.txt", "utf8");
    // res.end(text); // Sending 1.8MB of data over the internet is inconvenient. Check the network tab

    const fileStream = createReadStream("./content/big.txt", "utf8", {highWaterMark: 900000});

    fileStream.on("open", () => {
        fileStream.pipe(res);
    });

    fileStream.on("error", (err) => {
        res.end(err);
    });


}).listen(5000, () => {
    console.log(`Server is listening at port 5000`);
});