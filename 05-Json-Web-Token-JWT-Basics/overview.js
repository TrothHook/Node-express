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

// Why is using JWT is far better than using some random string, it is because JWT has a security feature where we can be sure about the integrity of our data.