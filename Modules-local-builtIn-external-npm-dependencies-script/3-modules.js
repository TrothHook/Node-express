// Modules

// CommonJS, every file is module (by default)

// Node uses CommonJS library under the hood, so every file in Node is a Module

// Modules - Encapsulation Code (only share minimum)

// *************************************************

// const john = "john";
// const peter =  "Peter";
// const secret = `SUPER SECRET`; // Sent to the 4-1st(3-modules).js

// **************************************************

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// } // Sent to the 5-2nd-modules-utils.js file

// ***************************************************

// const four_1st_3_modules = require("./4-1st-3-modules");
const sayHi = require("./5-2nd-modules-utils");

// The other way to do this

const {john, peter} = require("./4-1st-3-modules");


// console.log(four_1st_3_modules);
console.log(sayHi);

sayHi("susan");
sayHi(john);
sayHi(peter);
// sayHi(four_1st_3_modules.john);
// sayHi(four_1st_3_modules.peter);