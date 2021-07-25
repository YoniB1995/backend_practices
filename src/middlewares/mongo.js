const url = 'mongodb://localhost:27017'
const connection = await mongo.connect(url);
const db = connection.db('mydb');
const collection = db.collection('customers')



module.exports= {url,connection,db,collection}




// "C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe" - install mongo