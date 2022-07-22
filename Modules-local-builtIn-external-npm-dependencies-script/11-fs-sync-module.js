// There are two types when it comes to fs module or file module

// asynchronous/non-blocking fs


// synchronous/blocking fs . 


// We will mostly use asynchronous code.



// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// writeFileSync(
//     "./content/result-sync.txt", 
//     `Here is the result : ${first}, ${second}`, { flag : "a" }
//     );

// OR

const fs = require("fs");

// We have to read from the file system

// readFileSync is a method, and it has 2 parameters
// first one is the Path to the specific file, and the second parameter is the encoding format

console.log("start"); // Synchronously executes each line one after the other, so each task gets delayed, until the previous task has been completed. Therefore, Node cannot serve multiple users at the same time

// one task can take too long to complete

const first = fs.readFileSync("./content/first.txt", "utf8");

// writeFileSync is a method, and it has 2 parameters
// first one is the Path to the specific file, and the second parameter is the encoding format

const second = fs.readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// To create a new File. The method for that is writeFileSync.
// The writeFileSync method has 2 arguments --> 
// First one is the File name. If the file is not there, Node will create the file
// The second one is the value that we wanna pass

// In order to append a file, we will use { flag : "a" }. It is an options object

fs.writeFileSync(
    "./content/result-sync.txt", 
    `Here is the result : ${first}, ${second}`, { flag : "a" }
    );

    console.log("Done with the task");
    console.log("starting the next");