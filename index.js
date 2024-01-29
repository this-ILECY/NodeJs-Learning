const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/pain'});
    res.end('hey Amirreza!');
})

server.listen(port,()=>{
    
})