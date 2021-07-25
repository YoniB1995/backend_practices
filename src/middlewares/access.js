const express = require('express')
const app = express();

const test = (req,res,next)=>{
    res.header("Access-Control-Origin","*");
    next();
}


module.exports= test;