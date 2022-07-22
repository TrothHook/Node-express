//share with the rest of the applications
const john = "john";
const peter = "Peter";

//local - not sharing with the rest of the application
const secret = "SUPER SECRET";

console.log(module);

// Only whatever we dump in the exports = {}, we can access it in anywhere in the application. 

module.exports = { john, peter }