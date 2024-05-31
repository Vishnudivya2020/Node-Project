import http from 'http';
import fs from "fs";

//creating a basic server 
const server = http.createServer((req,res)=>{
    res.end('Hello World');
});



const port = 2152;

server.listen(port, () => {
    console.log("server listening on",port);
});