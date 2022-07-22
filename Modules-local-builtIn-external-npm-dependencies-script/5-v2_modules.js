// CommonJS, every file is module (by default)

// Modules - Encapsulated Code (only share minimum)

const names = require("./4-1st-3-modules");

const sayHi = require("./5-2nd-modules-utils");

const data = require("./5-alt-method");

require("./6-mind-granade");

// console.log(data);
// console.log(names);
// console.log(sayHi);


// sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);

// sayHi(data.singlePerson.name);

// console.log(data.items[2]);