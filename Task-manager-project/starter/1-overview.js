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

// mongoose.connect(mongodb+srv://JochemReinoud:<type in the password>@nodeexpress.waqrg6h.mongodb.net/<type in the project name>?retryWrites=true&w=majority)

// this will return a promise

// mongoose
// .connect(mongodb+srv://JochemReinoud:<type in the password>@nodeexpress.waqrg6h.mongodb.net/<type in the project name>?retryWrites=true&w=majority)
// .then(() => console.log(`CONNECTED TO THE DB...`))
// .catch((err) => console.log(err))