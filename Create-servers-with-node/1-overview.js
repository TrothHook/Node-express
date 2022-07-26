//  Basically , when we open a web browser and try to open an URL, we are actually making a request to the webserver

// that webserver is responsible to serving those resources as a response to the request made.

// the user sends the HTTP request messages and the server responds with the HTTP response message --> this is how we exchane data over the web

// Servers don't have GUI --> other than that, it is a computer

// Cloud is bunch of servers connected together

// ************************************************

// HOW HTTP MESSAGES (request message and response message) ARE STRUCTURED --> 

// They both have a start line. 

// They both have optional headers --> a blank line that indicates that all the meta info has been sent and effectively Headers are that meta info (information about our message)

//  As well as optional body --> there is no 'body' when the user just wants resource (there is basically nothing to send), only when the user want to add resource onto the server: yes only then we are expected to provide that data --> this is also called Payload

// **************************************************

// In the request message: At the start line: theres going to be a 'method' then the 'URL' as well as the 'HTTP version'

// We mostly have to do with Method and the URL

// METHOD describes what we want to do

// GET --> Read Data
// POST --> Insert Data
// PUT --> Update Data
// DELETE --> Delete Data

// ******************************************
// RESPONSE MESSAGE

// it is something what we are going to be creating.

// Start line: has the HTTP version, then we have a status code and status text

// Status Code: It just signals, what is going to be the result of the request --> Eg:- 200 means that the request was successful this 200 is what we are sending back, 400 means that there was some kind of request error, 404 means that there was no resource for the request 401 means that the request was unauthorized

// Again headers is there: where we provide info about our response message

// ********************************************

// https://prnt.sc/v4ZijMeNCXWh : network tab --> requests