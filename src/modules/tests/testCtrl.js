const fs = require('fs');

const getParamsTest = (req,res) =>{
    try{
        res.send(`Hello There ${req.params.fname}`)
        console.log("data connected successfully")
    }
    catch(error){
        res.send({error:error},)
    }
}

const postParamsTest = (req,res) => {
    try{
        const data = `{
            "us
        }`
        fs.promises.writeFile('../../users.json',)
        console.log("data sent successfully");
    }
    catch(error) {
        res.send({error:error,message : "bad request"})
    }
}  

module.exports = { getParamsTest}