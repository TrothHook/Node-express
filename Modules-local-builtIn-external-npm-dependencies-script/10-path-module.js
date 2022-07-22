
const path = require("path");

// Seperator property that returns a platform specific property (on windows it will be different, on mac it will be different)

console.log(path.sep);

// join method which will join a sequence of path segments using that platform specific separator as the limiter

// 2nd thing join method does is it returns the normalize resulting path

// as an example we wil create a folder --> "Content" with several subfolders and files

const filePath = path.join("/content", "subfolder", "test.txt");

console.log(filePath);

// // We can get the base name. We want the last portion of the file path. 

const base = path.basename(filePath);

console.log(base); 

// To return the absolute path, we will use .resolve method

// Sometimes we need to provide the absolute path

// It accepts a sequence of paths as arguments, or path segments and resolves it into absolute path

// Our application will run in a different environment, likely a server like heroku or digital ocean or my local machine

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(absolute);