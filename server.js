//define node.js
//node.js is a javaScript runtime built on Chrome's V8 JavaScript engine.
//unlike javascript that runs in browser, node.js runs on server




//example of a simple node.js server.
const http=require('http');

//create server.
const server=http.createServer((req,res)=>{
    res.end('Hello from the Node.js server');
});

//start server on port 3000
server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});