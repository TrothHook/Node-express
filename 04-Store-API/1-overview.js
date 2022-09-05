// Advance Filtering, Sorting, Dynamically populating our database

// We are in charge of store api and we want to provide bunch of search options for our users -> Search by name, filtering based on price

// Do the basic setup for the Node app, same as the previous 03-task-manager app

// Here we will use express-async-error package. No need to write asyncWrapper middleware here, this package will take care of it.

// We are statically populating our database with hardcoded company name with the enum key in the schema.

// In node there is a method known as exit. In our case it is useful -> why? Because if we are successful in populating the database with our data, we might as well terminate the whole process -> we dont need the file to be running. And if there is an error, we will exit by displaying an error code.

