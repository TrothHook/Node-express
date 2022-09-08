// JWT Basics

// So far in our projects, all our routes were public, meaning anyone can access them and use them however they please, irl, we don't want randon people to access our data.

// So, how to restrict access? A very popular method is JWT - Json Web Token

// For the sake of simplicity, think of them as long strings.

// Imagine we have two routes --> a dashboard and a login/register route. So, Dashboard is protected. We can click all day long on GET data, but we will have no access to the info. 

// And only when we login, we will get the token and only once we have the token, we can access the secret info which in this case is just going to be a random number.

// If a valid token is present in the request, the user can access a specific info.

// **************************************************

// Set up the two routes.

// There is a huge distinction betwoeen, whether we are registering or just logging in. Here we are just jamming both under the same route as here our main concern is going to be JWT

// ***Check the username, password in post(loin) request***

// Since we want to login and register users in this case, we are looking for two things -> Username and Password -> these are going to be available in the req.body

// ***if exist create new JWT***

// If and only if both of them exists we want to create a new JWT. If not then we want to send back the error response.

// ***send back to front-end***

// If we are successful in creating a new JSON WEB TOKEN, then we want to send it back to the front-end. Since front-end needs to access it in order to send another get request

// ***setup authentication so only the request with JWT can access the dashboard***

// On our end we want to setup the authentication, so only the request with JWT can access the dashboard

// We have checked for empty values. Now we need to create a Json Web Token and send it back

// So far we have been setting up all our routes in the following fashion. As long as the endpoint exists, the user just need to make a request, and our server will send back a response.

// BUT that is about to change. From now on, we will have two routes -> 

// The public ones ==> accessible by anyone.

// The restricted ones ===> accessible only with correct signed JWT.

// In our case, if the user provides a correct credentials, we will send back the signed json web token

// And in order to access the dashboard route, the front-end needs to provide the same token otherwise we will get back with an error response.

// JWT is just a way to exchange data between two parities -> EG: between a front-end app and our api

// Why is using JWT is far better than using some random string, it is because JWT has a security feature where we can be sure about the integrity of our data. -> If the token passes the validation, it means that it is the same token we have sent to the client. And the data wasn't tampererd with .

// Front-end also need to store the token. When and where? later

// HTTP**********************

// One of the feature of HTTP is that it is stateless -> it means that the server does not know, or remember any previous requests sent by the same client.

// So, even after the first second or the 200th successful request, the front end will still need to provide the valid token, otherwise the access will be denied.

// visit jwt.io

// jwt structure -> header, payload and signature

// header has 2 parts -> 1) the type of token -> in our case it will be JWT. 2) the algorithm that is used to create the signature. Then this one gets encoded with Base64Url

// payload -> this is where we will place the information. Eg. Here we can place the id of the user that just signed in/logged in/registered . Then we send back the entire token along with the payload back to the front-end . then the front-end sends it back to us. When we decode, we get that id. ==> what it means is that if the user has some kind of resource -> we access right away resources that belong to only that user . this also gets encoded with Base64Url

// Signature -> this is where the alogrith is used. the one that is specified in the header and then we add here the secret to sign our token. And as far as the secret, we have to keep this on our server.

// We will use jsonwebtoken npm package to sign and decode

// Next we need to understand, how the request with the token already present is going to look like.(since this is backend course, we are not going dwelve too much into the dos and don'ts on proper JWT storage on the front-end. There are best practices and they are important, but our current goal is to secure resource access on the server. So, we are only insterested in how the request is going to look like, so, we can implement the correct functionality on our end.) 

// A common approach on the front-end is to setup the authorization header in the request using the Bearer Schema

// We have header by the name of Authorization then we go with Bearer then the <token>

// the moment we submit a valid username and password -> we will get back the token in the Local Storage. So, we have the token, and when we are making the next request -> we just grab the data from the local storage. Check the network tab > request headers

// At this point, the functionality is done. Now we need to make this project better. we will write a middleware function auth.js

// In a realistic application, there will be multiple routes that is going to use the functionality under dashboard route

// authenticationMiddleware function -> in later projects we are going to use this middleare function in many different routes

// Now auth middleware is done. since we have written next(); we can place this middleware infront of any number of controller route functions, it will work.

// Next we have to handle the errors in a better way

// So, far we have been using only one class CustomAPIError which extends from the Error class to handle the erros -> 400, 401. The error 500 is already handled properly. 

//  So, what we will do to handle 400 and 401 is to write 2 more classes which will extend from CustomAPIError class

// Instead of hardcoding status codes, there is better approach. We will use http-status-code package