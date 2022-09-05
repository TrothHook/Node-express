require("dotenv").config();
require("express-async-errors");

// async errors

const express = require("express");
const errorHandlerMiddlerware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");


const app = express();

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

// middleware

app.use(express.json());


// routes

app.get("/", (req, res) => {
    res.send(`<h1>Store API</h1><a href="/api/v1/products">products route</a>`);
});

app.use("/api/v1/products", productsRouter);

// products routes


app.use(notFoundMiddleware);
app.use(errorHandlerMiddlerware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
