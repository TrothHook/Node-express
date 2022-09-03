// With this project we will learn how to setup and connect to the database

// So, we will learn how to effectively persists our data to the cloud.

// We will learn how to perfom all the CRUD operations on our data. -> fundamental to any application

// Since, it is a node course, we will only work on the backend. So, essentially the frontend app is only there to get the full picture.

// With this we will be able to see the entire request and response cycle

// For this project: We have got a FORM and a LIST

// By communicating with our backend -> meaning by sending request to our API , the user can CREATE, READ, UPDATE and DELETE tasks

// This is NOT a typical TO DO LIST APP, that stores everything in local storage

// We are going to be responsible for setting up the API, that communicates with the cloud database and persists the data to the cloud.

// *****************REST API***********************

// Before we start setting up our database, we will quickly talk about routes -> why we use such structure

// Long story short -> it is because we will build a REST API.

// In these days, the term API is used pretty much for everything. But in our case, since we are building a server, essentially we want create a HTTP interface, so the other apps (most likely frontend ones) can interact with our data. That is how we view API in this scenario

// REST -> Representational State Transfer -> Most popular API design pattern -> A pattern that combines HTTP verbs, route paths and our resources(aka data)

// REST determines how the API will look like

// It is a pattern and NOT a strictly enforced set of rules

// We can go with any kind of API -> main thing is to stick with a particular one and be consistent with it, else it will be confusing for our users

// https://prnt.sc/EuGfYPdmsyXr -> 

// A common approach is that, for the main lists (customers, orders, items etc) in our case , it is tasks -> in order to get all the items , we use GET method

// To create one, we go with the same end point, just a different method -> POST method . Even though the end points are the same, since the method is different, these two totally different requests

// For individual item, we have the same path pretty much, except after the end points, we have the params here 

// For Update/Edit -> PUT/ POST Methods

// To Delete -> DELETE Method

// **********JSON*********

// Since JSON is a common format for sending and receiving the data in REST API -> meaning we will use json method instead of send method

// REST is itself somewhat fuzzy -> meaning -> often times we will deviate away from REST, since that is what the setup will require

// If we notice carefully -> The API allows our user to perform a CRUD operation on our data. It is a common approach where the API interface is built around CRUD -> why -> since those are usually or typically operations that the users or APPs will perform on the given data(users, orders,  customers or in our case it is going to be tasks)


// ************MongoDB*************************

// Initially we used a basic array to store some list of items on our server.

// And based on some request we performed some kind of operations on the list

// And then sent back the response -> NOT a very serious approach to store our data.

// We will use NoSQL or Non Relational Database --> MongoDB

// In conventional database, we store everything in rows and columns. But in MongoDB, we will store everything in Json format -> And it doesn't care how the data relates to each other.

// Instead of Tables, we have Collections -> which represents group of items

// Instead of Rows, we have Documents -> which represent single item

// And a Document is a set of key value pairs.

// And as far as datatype, we can use Strings, Arrays, Objects, Numbers and many more

// We will use cloud storage, so will use MongoDB Atlas


// ********Basic CRUD on MongoDB Atlas*****************


// CRUD on GUI in our manual setup


// ****************mongoose*************


// Once our database is ready to go , we need to connect to it from our server.

// We could use natie mongoDB driver. But a very popular package by the name "mongoose" is used instead.

// mongoose is a object data modelling library.

// It is popular because, out of the box, it comes with a lot of stuffs, that make development much faster. It has extremely straight forward API and it basically does all the heavy lifting for us.


// ********Start using the database***************

// Start using the database in our server.

// First thing we need to do is to setup a connection.

// A basic setup -> we are going to import mongoose -> we are going to do that in connect.js in the db folder.

// mongoose.connect(connectionString<.env file>)

// this will return a promise

// mongoose
// .connect(connectionString<.env file>)
// .then(() => console.log(`CONNECTED TO THE DB...`))
// .catch((err) => console.log(err))

// After doing the next , we will have successfully connected to the database. 

// But there is a problem -> Our server and database connection do not work in sync -> meaning: take a look at the console -->> 

// Server is listening on port 3000...

// CONNECTED TO THE DB...

// What is the use for our server, if we are not connected to the database -> meaning: first we need to connect to the database, and only if we are successful in doing so, only then do we spin up our server.

// In order to do so, we will need to refactor the code in connect.js , app.js and also create a .env file -> .env file will store and hide our connection string

// In connect.js -> we have to setup the mongoose.connect as a function and return it from inside the function -> we call the function connectDB -> export the function from connect.js

// Next we will invoke it , from the app.js -> import connectDB from connect.js to app.js

// In app.js -> we will write one more function start. Inside this function we will invoke the connectDB -> only if we are successful in invoking connectDB, only then we will spin up our server.

// since , connectDB will return a promise, the start function will have to be async, so that we can use await.

// In async function, we should use try catch block -> to handle error -> in the try block we will invoke connectDB(process.env.MONGO_URI) and then spin up the server.


// ********DOCUMENTS-SCHEMA****************

// setup the structure for future documents and assign them to the collection

// We are going to do that using Schema and Model from mongoose

// create folder > models > create file task.js

// const varNameSchema = new mongoose.Schema({}) -> using schema we will setup the structure for all the documents that we will have in our collection

// The syntax is we will use key value pairs and eventually we will set them equal to objects and we will pass in more options

// But to start with something quick, here we will set up the key and their types -> bare minimum for this thing to work

// ***model***

// Once we have the Schema(structure for the data) -> now we want to setup that model -> Model is a representation for the Collection

// In mongoose, the model is a wrapper for the schema

// If the schema defines the structure for the document like the type , validations etc . A mongoose model provides an interface to the database, so by using the model we will able to CREATE, UPDATE, QUERY and DELETE our Documents with great ease. Since, the API is extremely straight forward

// mongoose.model("<name>", <pass in the schema>)

// Next thing we need to do is to go to the controllers and start using the model

// ***************************************************

// Navigate back to Mongoose DOCS -> Models -> An instance of a model is called a document

// The first argument is the singular name of the collection our model is for. Mongoose automatically looks for the plural , lowercased version of our model name.

// few ways we can create an instance of a model(document) ->

// we can use .create with callback function approach but we can also use await

// what .create is looking for? It is looking for the object with those properties -> in our case we have: name and completed -> we can pass this manually.

// But it will make more sense if we just go to createTask route (see Tasks controllers), in there we can access the Task data, in the req.body -> why don't we just pipe it through and pass it along to our model create method

// We will grab the body (in our case, it will be coming from postman) and instead of sending it back, we will pass it to task.create

// Since we are going to be using await on task.create -> so, createTask function will be async  -> so, the controller will be async

// *********Validation**************

// We only accept the properties that are specified in the schema, our current setup up until now has a major flaw -> there is no validation

// As of now, we can pass in empty values -> with this our database can get filled with bunch of empty items.

// we can setup our properties as objects, and we can then setup built in validators

// to learn more about validation -> mongoose docs -> Validation

// ****************ERROR HANDLING**************

// have to use try catch block when we are using async await

// ***************GET DELETE***************

// visit mongoose docs -> Queries


// ****************UPDATE/PATCH*****************

// The update controller

// There is going to be a bit more functionality

// In this case, > we are looking for the id > also need the body (since we will be updating something) > we also need to pass in some options, since by default, we won't get the validators working right away. > and also we won't get the item , we just updated.

// *************BETTER APP*******************

// With this all the core functionality is in place, the app works -> both the front end and the back end.

// But we need to improve our code.

// ***patch vs. put***

// When we are using PUT, we replacing the existing resource. We will just pass in the properties we want to set up in an item and the rest of them effectively will be removed.

// PATCH is for partial update. We are just updating the properties we are passing in and the rest of the properties will remain as it is.