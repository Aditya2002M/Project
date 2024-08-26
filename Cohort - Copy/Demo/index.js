
const express = require('express');
const port = 3000;
const app = express();
const http = require('http');


const users =[{
    name:"aditya",
    adress:{
        homeno:'123',
        laneno:'456'
    }
}]

app.get('/',function ( req ,res){
    const homeno = users[0].adress[0];
    console.log(homeno);
    return res.send("hey")
})

// app.listen(port);
const myserver =http.createServer(app);

myserver.listen(port,()=>{
    console.log("server started !!")
})