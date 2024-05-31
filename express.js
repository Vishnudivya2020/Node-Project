import express from "express";
import path from "path";

import fs from "fs";

const __dirname = path.resolve()

const uploadsDir = path.join(__dirname, 'sample_folder')
const filePath= path.join(uploadsDir, `${new Date().toISOString().replace(/[:.]/g, '-')}.txt`);


const server = express();

//create a file 
server.post("/create-file" , (req,res)=>{
    const { body } =req;
     fs.writeFileSync(filePath,
          Date.now().toString(),);
         res.send("file created successfully") ; 
   });

   //Read the file directory
server.get('/',(req,res) =>{
    let Directory= fs.readdirSync('./sample_folder');
    res.send({Directory});
});

const port =2159;

server.listen(port, () => {
    console.log("server listening on port"+port);
});