
const mysql = require('mysql')
require('dotenv').config();

const createPollConnection = () => {
try{
    return mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_DATABASE
});
}
catch(error){
    console.log(error)
}
}

module.exports = createPollConnection;


// pool.query('SELECT * FROM `Persons`',(error,results,fields) => {
//     if (error) throw error;
//     console.log(results);
// })


