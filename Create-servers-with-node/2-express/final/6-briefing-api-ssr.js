// When it comes to Express, we will use one of the following two options --> 

// We will use it to set up API

// Or, we will use it templates with server side rendering (SSR)

// API VS. SSR

// API can mean a lot of things. In Express or in HTTP case, when we talk about API, we mean setting up an HTTP interface to interact with our data.

//  Now these data are sent using JSON --> Javascript Object Notation

//  And in order to send back our response, we are going to use res.json() method --> res.json() method will do all the heavy lifting. For example --> setting up the proper content type and stringify our data.

//  The other flavour we have is Server Side Rendering where we will set up templates and send back entire HTML, CSS and JAVASCRIPT ourselves. We are going to do that using res.render() method.

//  We will go with the API at first, since it is more heavily focused on Express and since, SSR has other non-Express extra overhead stuffs.

// **************************************

// API

// Our server provides data and any frontend app that wants to access it and use it, can make a HTTP request and using our data, it can set up the API and functionality

// On a server we have to set up the API or data and we share the data --> we create the HTTP interface --> And then the frontend app simply grabs this data and then we set up the functionality and the user interface

// We are going to be responsible for sending back the data --> Setting up the responses

// So, we are going to be setting up APIs that are HTTP interfaces to interact with our data