const http = require('http');
const port = 3000;
const fs = require('fs');
const express = require('express');
var app = express();




const server = http.createServer((req, res) => {
    res.end();
})



server.listen(port, (error) => {
    if(error){
        console.log("The server is not responding", error);
    } else {
        console.log("The server is listening on port " + port); 
    }
});


app.get('/getUsers', (req, res) => {
     fs.readFile('./requests_small.json', (err, data) =>{
        if(err) throw err;
        res.send(data);
    })
})
