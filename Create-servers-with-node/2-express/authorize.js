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
        req.user = {name: "john", id: "3"}
        next();
    }
    else {
        res.status(401).send(`Unauthorize`);
    }
}

module.exports = authorize;