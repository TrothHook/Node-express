// With asynchronous , we need to provide a call back. 
// We run the callback when we are done, like in addEventListner for example btn.addEventListner("click", (callback) => {return callback});

// The first argument is the path and the sencond argument is the encoding format and the third argument is the callback funciton

// The callback function has 2 parameters --> error and the result


const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result); // But with this we will get the buffer instead of the result, since we haven't given the utf encoding
// });

console.log("start");


readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result;

    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        const second = result;

        writeFile(
            "./content/result-async.txt",
            `Here is the result asynchronously : ${first}, ${second}`,
            (err, result => {
                if(err) {
                    console.log(err);
                    return
                }

                console.log("Done with this task");

            })
            );

    });

});

console.log("Starting next task"); // This is logged after the "Done with this task" . This is happening as this is the asynchronous method

// With this method, there is a callback hell
// we need to use an alternative to this



// The moment we start the program, we just offload this task first and then we continue with the code.

// So , when user1 (say) comes to our app, and wants to use the first functionality, Node can offload that task, and the application can keep on serving other users simultaneously

// reading from the database and writing to the database