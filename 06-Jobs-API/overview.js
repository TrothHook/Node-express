// Combine our auth knowledge with our CRUD functionality

// Read README.MD

// Since we are going to working with more number of validators

// Just look for the string validators in  mongoose docs

// It is a very bad practice to save the user password as a string.

// Error checking -> we can check for the empty values right here in the controller -> recap
    // const {name, email, password} = req.body;
    // if(!name || !email || !password) {
    //     throw new BadRequestError(`Please provide name, email and password`, StatusCodes.BAD_REQUEST);
    // }

// One thing to take away from this project ==> Never ever store user password as a simple string. We will hash them instead, in simple terms it means generating random bytes and combining it with the password before we pipe it through the hash function => a mathematical algorithm that maps a data of any size to a bit string of fixed size

// Hashing is a one way street. meaning, it cannot be reversed. If the input changes , even a tiny bit, the resulting hash will be completely different => really good for storing passwords: we can accomplish 2 things at once
//  => stores passwords in a form that will protect them, even after the password is compromised.
// => at the same time, being able to verify thecorrect user password

// for password hashing, we will use the library known as bcrypt js

// We want to setup the temporary user object

// const salt = await bcrypt.genSalt(10); ==> here we generate salt, which means random bytes ==> we generate these random bytes by running the method, getSalt(<number of bytes>)
// const hashedPassword = await bcrypt.hash(password, salt);
// const tempUser = {name, email, password:hashedPassword}

// Next we need to generate a token. It should be simple now, but one problem ==> our controller is getting very busy. So, we will have to use good old middleware, in this case Mongoose middleware

// We will use bcrypt inside the models User.js
// UserSchema.pre("save", async function(next){
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// })

// The last thing, notice the docs, we can also go with async await, what that simply means that, remove the next, it will still work here.

// To complete register functionality, Learn about schema instance methods in mongoose docs

// Every document we create we can have functions on them, these are going to be instances of our schema. The way we setup those functions ==> we setup the schema name --> then methods --> then whatever function we want

// Thus once we create an user in the register controller, that user will have function ==> So, we will just create a function that just generates that token

// Remove this line of code from controller ==> const token = jwt.sign({userId: user._id, name:user.getName}, `jwtSecret`,{expiresIn:`30d`,
// }); And use the schema instance in the models

// With this we are done with the register controller -> registration functionality. In the process we learnt ==> hashing the password, setting up the mongoose middleware as well as the instance methods on the schema

// For JWT Token => expiresIn:30d means 30 days, by 30 would mean 30ms
// For the key, we can get away with jwtSecret => but it is more meaningful to have a proper key ==> allkeysgenerator.com

// put all key and the expiresIn inside the .env file.

// ************LOGIN FUNCTIONALITY*****************

// in bcryptjs there is a function called compare, it compares the passwords

// The last thing we need is auth middleware ==> where we can verify the token. and if everything is correct get the user id and pass it along to the jobs routes