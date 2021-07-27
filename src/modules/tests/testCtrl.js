
const getParamsTest = (req,res) =>{
    try{
        res.send(`Hello There ${req.params.fname}`)
        console.log("data connected successfully")
    }
    catch(error){
        res.send({error:error},)
    }
}

testRouter.get('/')

module.exports = { getParamsTest}