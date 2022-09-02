// The setup will be as follows:

// First we will setup the express as usual
// Next instead of setting up the app, we will go with the router -> we will explicitly get the router from express ->> this is going to be a router instance which will take care of the routing instead of the app.

const express = require("express");

const router = express.Router();

// let { products, people } = require("../data"); // cut this as well and paste it inside the people.js inside the controllers folder

// now we will import all the functions from the people.js in the controllers folder to over here

const {getPerson, createPerson, createPersonPostman, updatePerson, deletePerson} = require("../controllers/people");

// cut and paste all the routes except the "login" route from app.js to here

// router.get("/", getPerson); // cut and pasted the callback function from here to the people.js file in the controllers folder -> refactoring


// router.post("/", createPerson);

// trying out another route

// router.post("/postman", createPersonPostman);


// router.put("/:id", updatePerson);

// router.delete("/:id", deletePerson);

// *********** OR ***********

// shortening the router syntax

router.route("/").get(getPerson).post(createPerson);

router.route("/postman").post(createPersonPostman);

router.route("/:id").put(updatePerson).delete(deletePerson);

// exporting the router

module.exports = router

// Now we have cleaned up our app.js -> auth.js also looks clean since it has only one post method

// But people.js still looks like a mess, since it has many routes with post methods and other routes with other methods as well.