//  Stream examples

// if the file is too big we cannot store it in a variable like in the fs module as a string etc.

// one solution for the above problem will be the readStream

const fs = require("fs");

for(let i = 0; i < 10000; i++) {
    fs.writeFileSync("./content/big.txt", `Hello World ${i}\n` ,{flag: "a"});
}
