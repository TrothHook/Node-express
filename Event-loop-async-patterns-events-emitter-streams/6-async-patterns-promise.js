const { readFile, writeFile } = require("fs");

// goal is to make a cleaner async coding

// create a new func. and pass the path. This function will return a new Promise()

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });
    })
}

getText("./content/first.txt")
    .then((result) => console.log(result))
    .catch((err) => { console.log(err) });