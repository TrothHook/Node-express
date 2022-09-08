require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();



const mainRouter = require("./routes/main");
const connectDB = require("./db/connect");

const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddlware = require("./middleware/not-found");


// middleware
app.use(express.static("./public"));
app.use(express.json());


app.use("/api/v1", mainRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddlware);


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // connect to the database
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }

}

start();