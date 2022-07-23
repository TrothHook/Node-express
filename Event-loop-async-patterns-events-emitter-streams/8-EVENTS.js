// EVENTS

// Event driven programming

// Heavily used in Node.js

// User clicks a button, hovers over a link etc --> we have to handle that . Handling events is a huge part

//  The flow of the program is in part dependent upon the events

// listen for specific events and register functions that will execute in response to those events. Once, the events takes place, the callback function fires

// ****************************************************

// Many built-in modules in Node.js use events under the hood.
// Therefore making events and event driven programming a big part of Node.js

// Setting up our own events in Node.js --> Have to assign it to the EventEmitter class

// we require events module and we assign it to a common practice variable EventEmitter, since what we are getting back from the events module is a class

const EventEmitter = require("events");

// At this point, we have 2 options -->

// 1. if we want create something custom, we will need to extend the class

// 2. or if we simply want to emit an event and listen for it, then we can just create a instance of the class --> meaning we have an object

const customEmitter = new EventEmitter();

// many methods inside this customEmitter object, but we are interested in only these 2:

// on --> listen for a specific event
// emit --> emit that event

customEmitter.on("response", () => {
    console.log(`data recieved`);
}); // we are looking for a response event

customEmitter.emit("response"); // Need to emit same event --> in this it is a response event

// This above is the basic setup for events

// ******************************************************

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
    console.log(`data recieved user --> ${name} with id: ${id}`);
});

// First point: We can have as many methods as we want. As many functions as we want --> listening for that event and do some other logic

customEmitter.on("response", () => {
    console.log(`some other logic`);
});

customEmitter.emit("response", `barun`, 43);

// Second point: the order matters: meaning --> we first listen for an event, and only after that, will we emit that event

// Third point: we can pass the arguments when we are emitting the event

// Lastly even though we may not write our own events, events are a core building block of Node.js . And as we are writing and building code for our Node application, we are using those events at the end of the day anyway because a lot of built in modules rely on them.