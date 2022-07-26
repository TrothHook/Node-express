// Build more meaningful API

// In this process, we will build route parameter
// As well as query string parameters

const express = require("express");
const app = express();

const { products,people } = require("./data");

app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1><a href="/api/products">Products</a>
    `);
});

app.get("/api/products", (req, res) => {

    const newProducts = products.map((product) => {
        const { id, name, image} = product;
        return {id, name, image}
    });

    res.json(newProducts);
});

// This below looks like a lot of work for so little

// Right now there is only 4 products, so we an individually set up four routes. But what if we have 200 products?

// So, in express we have something called route parameters --> which is going to be the solution

// app.get("/api/products/1", (req, res) => {

//     const singleProduct = products.find((product) => {
//         return (product.id === 1)
//     });

//     res.json(singleProduct);
// });

// Route Parameters

// This productID here is just a name, naming is upto us

app.get("/api/products/:productID", (req, res) => {

    // Whatever we are going to set up in the URL, as the Route Parameter --> is always going to come back as string

    // However, the data id is a number.

    // And whatever we set up as far as our name, it is going to be in the req and parameters object --> inside the req.params

    // now we can destructure it from the params and use it to find that particular product

    // console.log(req);
    // console.log(req.params);

    const {productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID));

    if(!singleProduct){
        return res.status(404).send(`Product Does Not Exist`);
    }
    res.json(singleProduct);
});

// Route Paramters can get complicated.

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params);
    res.send(`Hello World`);
});

app.listen(5000, () => {
    console.log("Server is running at port 5000");
});

// Whenever we think of Route Parameters , think of it as a placeholders, where the user provides data

// And then using req.params, we can access that data

// And set up some kind of logic