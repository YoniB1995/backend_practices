
const mysql = require('mysql')
require('dotenv').config();

try{
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_DATABASE
});

pool.query('SELECT * FROM `Persons`',(error,results,fields) => {
    if (error) throw error;
    console.log(results);
})

module.exports = pool
}
catch(error){
    console.log("the pool is not connected , please try again")
}




