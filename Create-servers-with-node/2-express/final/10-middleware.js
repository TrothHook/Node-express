// Middleware in Express JS

// Middlewares are functions that executes during the request to the server

// Each Middleware function has access to request and response objects and when it comes to functionality --> sky is the limit

// Middleware is everywhere in Express. 
// Express apps are nothing but bunch of Middleware functions stuffed together

const express = require("express");

const app = express();

// So, far what we have done is there are incoming requests and we have been sending responses.

// req => res

// What middleware does is it sits between, hence the name

// req => middleware => res

// Simple scenario --> we have 2 routes --> we have the home route and we have the about route

// In these routes , we want to log the method the user is using, the URL the user is trying to access and for example a date.

// We have npm packages that do this --> as our express app gets bigger and bigger --> it is very useful to see those incoming requests in that manner

// app.get("/", (req, res) => {

//     // Now if we go with logger and if we set up that functionality in the route for the HomePage, we also have to set it up in the route for the about page as well

//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     res.send(`Home`);
// });

// // Now if we have this same logger functionality in the route for about page, we have to set it up again.

// // What if we had 20 routes

// // So, solution would be if we set up a function and in that function , we have all this logic

// // And then we attach it to the routes we want it to.

// app.get("/about", (req, res) => {
//     res.send(`About`);
// });

// app.listen(5000, () => {
//     console.log(`Server is running at port 5000...`);
// });

// ***************************

// Using middleware logger function

// const logger = (req, res, next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     res.send(`Testing`);
// }

// When we work with middleware, we must must must must must pass it on to a next middleware, unless we are terminating the whole cycle by sending back the response

// Doesn't matter if we are accessing the Homepage, since we have our middleware, we are actually sending back the testing. This is why the middleware is so so powerful.

// We can literally do whatever we want over here. We can set up all kinds of cool logic. And then we have 2 options --> 

// Either we can terminate the whole cycle and just say res.send() and se send back our own data.

// const logger = (req, res, next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     res.send(`Testing`);
// }

// OR, we pass it on to the next middleware, which ofcourse is going to be our get methods

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}


app.get("/", logger, (req, res) => {
    res.send(`Home`);
});

app.get("/about", logger, (req, res) => {
    res.send(`About`);
});

app.listen(5000, () => {
    console.log(`Server is running at port 5000...`);
});