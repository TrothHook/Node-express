// Read Event Loop from Nodejs.dev

// In frontend, async javascript can offload the task to the browser. Browser has some APIs like setTimeout(() => {}, 0); or setInterval(() => {}, 2000);

// course-api.com

// NodeJS Event Loop: we can offload some time consuming operations and in the mean time can serve all other user's requests.

// Event loop example

const fs = require("fs");

console.log(`Started a fisrt task`);

// CHECK FILE PATH!!

fs.readFile(`./content/first.txt`, `utf8`, (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log(`completed first task`);
});

console.log(`starting next task`);