// const authorize = (req, res, next) => {
//     console.log("authorize");
//     next()
// }

// module.exports = authorize;

// We are going to set up a query string

// If the user provides a query string in the request URL, only then we will send back the resource the user is requesting.

// However, if the user doesn't provide the user query in the query string parameter, then  we will just send back 401 --> which means unauthorize

const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === "john") {

        // Why it is so powerful because, in the authorize function, we at the user

        // Now not only we can check word at using query string parameter but also access this again

        // But this is for just demonstration

        // We are attaching the user property to the request object, so even if this is a middleware, we can access the user property even in the main app.js in any of the routes

        // Middleware allows us to structure our applications as lego blocks

        // So, we have this piece of functionality, and we have access to that piece of functionality and finally when we combine them, we have this nice working express server

        // Normally , we will use the JSON webtoken and if and only if the token exist, only then we communicate with the database and actually get the user

        req.user = {name: "john", id: "3"}
        next();
    }
    else {
        res.status(401).send(`Unauthorize`);
    }
}

module.exports = authorize;