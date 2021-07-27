const express = require('express');
const router = express.Router();

router.get('/:fullname',(req,res)=>{
    res.send(`User {${req.params.name},${req.params.lastname}} entered the`)
})

module.exports = router