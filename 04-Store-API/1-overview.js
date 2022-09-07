// Advance Filtering, Sorting, Dynamically populating our database

// We are in charge of store api and we want to provide bunch of search options for our users -> Search by name, filtering based on price

// Do the basic setup for the Node app, same as the previous 03-task-manager app

// Here we will use express-async-error package. No need to write asyncWrapper middleware here, this package will take care of it.

// We are statically populating our database with hardcoded company name with the enum key in the schema.

// In node there is a method known as exit. In our case it is useful -> why? Because if we are successful in populating the database with our data, we might as well terminate the whole process -> we dont need the file to be running. And if there is an error, we will exit by displaying an error code.


// The setup is going to be more complex, than just hardcoding the name or any of the other property values.

// We won't be sending responses based on hardcoded filter values

// Let's start with our request, more specifically query params -> that is how we will get our data

// http://hn.algolia.com/api/v1/search?query=... or http://hn.algolia.com/api/v1/search_by_date?query=... 

// First we need to understand how can we send those query string parameters from POSTMAN

// Regex, query operator -> mongodb docs

// Next we will configure the option and limit, with this it will provide users an option to choose a page.

// skip works the same way as limits, except that it skips the first items in the response.

// use skip and limit for pagination functionality.

// First thing we will do for numericFilters is operator map