const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Another way to set up the above

// By Using Event Emitter API
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it

// server also has a method --> on() and it is listening for a request event
server.on('request', (req, res) => {
  res.end('Welcome');
})

server.listen(5000);
