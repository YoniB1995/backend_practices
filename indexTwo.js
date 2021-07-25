const express = require('express')
const fs = require('fs')

const app = express();

app.route('/routeOne',(req,res,next)=>{
    res.send("Hello There route One");
    next();
})
app.route('/routeTwo',(req,res,next)=>{
    res.send("Hello There route One");
    next();
})

app.get('/oneTry',(req,res)=>{
    res.send("This is the first Try")
})
app.get('/secondTry',(req,res)=>{
    res.send("This is the second Try")
})


app.listen('8500', ()=>{
    console.log('logged on localhost:8500!!')
})



module.exports = app