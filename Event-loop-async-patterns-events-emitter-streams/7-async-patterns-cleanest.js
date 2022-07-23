const fs = require("fs").promises;

const start = async() => {

    try{
        const first = await fs.readFile("./content/first.txt", "utf8");
        const second = await fs.readFile("./content/second.txt", "utf8");

        await fs.writeFile(`./content/result-mind-granage.txt`, `THIS IS AWESOME! : ${first} ${second}`, {flag: `a`});

        console.log(first);
        console.log(second);
    } catch(error) {
        console.log(error);
    }

}

start();



// Even cooler: We can also skip writing this util module as well!

// Setting up the code without the wrapping.

// In node there is a module called util

// const util = require("util");

// inside this module we have a method called promisify

// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

// const start = async() => {

//     try{
//         const first = await readFilePromise("./content/first.txt", "utf8");
//         const second = await readFilePromise("./content/second.txt", "utf8");

//         await writeFilePromise(`./content/result-mind-granage.txt`, `THIS IS AWESOME! : ${first} ${second}`);

//         console.log(first);
//         console.log(second);
//     } catch(error) {
//         console.log(error);
//     }

// }

// start();



// commenting this out as the below is showing the background workings of the Promise. The goal was to make the code cleaner and more readable

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, "utf8", (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }

//         });
//     })
// }

// const start = async() => {

//     try{
//         const first = await getText("./content/first.txt");
//         const second = await getText("./content/second.txt");
//         console.log(first);
//         console.log(second);
//     } catch(error) {
//         console.log(error);
//     }

// }

// start();


