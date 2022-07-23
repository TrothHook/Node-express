const {createReadStream} = require("fs");

const stream = createReadStream("./content/big.txt", { highWaterMark: 90000});

// default is 64KB
// last buffer --> remainder
// highWaterMark --> control the size of the chunks
// const stream = createReadStream("./content/big.txt", {highWaterMark: 9000})
// const stream = createReadStream("./content/big.txt", {encoding: "utf8"})

stream.on("data", (result) => {
    console.log(result);
});

stream.on("error", (err) => console.log(err));

//  Output: <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 32 0a 48 65 6c 6c 6f 20 57 6f ... 65486 more bytes>
// {/* <Buffer 57 6f 72 6c 64 20 33 39 32 30 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 33 39 32 31 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 33 39 32 32 0a 48 65 6c 6c 6f ... 65486 more bytes> */}
// {/* <Buffer 6f 72 6c 64 20 37 37 37 35 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 37 37 37 36 0a 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 37 37 37 37 0a 48 65 6c 6c 6f 20 ... 37768 more bytes> */}

// as we can see, we are reading the data in chunks of 64KB. 64 + 64 + 37 = 165 KB