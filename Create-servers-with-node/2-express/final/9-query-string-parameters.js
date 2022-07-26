// Ouery String Parameters or URL Parameters

// It is a way for us to send small amounts of information to the server using the URL

// This info is usually used as parameters to query of database, or filter results

// It is up to the people who set up the servers.They decide on what parameters are going to be accepted and what functionality is going to depend on those values

// http://hn.algolia.com/api/v1/items/:id -->

// domain name --> hn.algolia.com

// /api --> a common practice

// http://hn.algolia.com/api/v1/search?query=foo&tags=story

// /search --> this term can be whatever as per our wish

// ? --> whatever is after this question mark, is not technically part of the URL

// Meaning it is just a way for us to send the data to the server and the server decides what to do with this data

// So, the URL ends at search. And then we have a question mark and after the question mark --> is just a specifc info about the data that user is requesting

// So, basically the user adds a query parameter with any value

// Query String parameter is in key value pair

// Normally algolia and its server will determine the keys in the query string parameter 

// but while designing an API, it is in our hands.  So, it is upto us to handle those Query String parameters

// We will purposely setup a new route

// A typical setup adding this: 

// app.get("/api/products/1", (req, res) => {

//     const singleProduct = products.find((product) => {
//         return (product.id === 1)
//     });

//     res.json(singleProduct);
// });

// to the list

// We will look for specific property on our request object, and then if that property is provided, then we will return a more detailed response

// Meaning --> there might be some filtering or something like that. But if not, then we will send back all the products

// *********************************************

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

app.get("/api/products/:productID", (req, res) => {

    const {productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID));

    if(!singleProduct){
        return res.status(404).send(`Product Does Not Exist`);
    }
    res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
    console.log(req.params);
    res.send(`Hello World`);
});

app.get("/api/v1/query", (req, res) => {
    console.log(req.query);

    const {search, limit} = req.query;
    let sortedProducts = [...products];

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length < 1) {
        // res.status(200).send(`<h1>No products matched your search</h1>`);

        // more common practice
        
        // res.status(200).json({success: true, data: []});

        // But we cannot send 2 responses in the same request as javascript reads the code line by line. and Express is confused. So, we have to return it


        return res.status(200).json({success: true, data: []});
    }

    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log("Server is running at port 5000");
});
