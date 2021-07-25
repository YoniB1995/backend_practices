const express = require('express')
const fs = require('fs')
const router = express.Router();
const app = express();


app.get('/oneTry',(req,res)=>{
    res.send("This is the first Try")
})
app.get('/secondTry',(req,res)=>{
    res.send("This is the second Try")
})


app.listen('8500', ()=>{
    console.log('logged on localhost:8500!!')
})

router.get('/routeOne',(req,res)=>{
    res.send("This is routeOne")
})

router.get('/routeTwo',(req,res)=>{
    res.send("This is routeTwo")
})


module.exports =router