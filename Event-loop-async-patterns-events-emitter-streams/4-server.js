const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})


//  .listen (port, () => {}); process stays alive, because .listen (port, () => {}); is asynchronous. the moment we have set it up, the event loop is just waiting for those requests to come in. 

// " Hey EventLoop! Keep listening for those incoming requests! " , said http.createServer((req, res) => {}).listen (port, () => {});

// And then when the requests come in, it runs the call back of the http.createServer method. 
