const names = require("./4-1st-3-modules");
const sayHi = require("./5-2nd-modules-utils");
const data = require("./5-alt-method");
require("./6-mind-granade");

sayHi("Naruto");
sayHi(names.john);
sayHi(names.peter);
sayHi(data.singlePerson.name);