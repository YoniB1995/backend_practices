const express = require('express')
const app = express();
// const Http = require('http')
const fs = require('fs')
const path = require('path');
const help = require('./src/modules/routes/help');
const myLogger = require('./src/middlewares/logger')
const userApp = require('./src/middlewares/access')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const morgan = require('morgan')
const {MongoClient} = require('mongodb');

// app.use(userApp)
// app.use(myLogger)
// const funcFs = require('fs').promises
// const chalk = require('chalk')
const util = require('util')
/*=========================================================*/
// File System

// fs.readdir('./',(req,res)=>{

//     console.log(res)

// })

// fs.writeFile('yoniS.txt',"Hello World",(err)=>{
//     err? console.log(err) : console.log('success');
// })


// fs.writeFile('ranbarkzik.txt',"This is a practice", (err)=>{
//     if (err) throw err;
//     fs.readdir('./',(err,result)=>{
//         console.log(result)
//     })
// })

// הצגת הקובץ המלא אחרי קידוד 
// fs.readFile('./index.js', {encoding: 'utf8'}, (err, result) => {
//  if (err) throw err;
//  console.log(result);
// });

//יצירת תיקייה
// fs.mkdir('./newFile', (err) => err? console.log(err) : console.log('file has created!'))

// fs.rmdir('./newFile',(err) => err? console.log(err) : console.log('file is deleted!'))

// console.log('before making directory');
// const newDir = fs.mkdirSync('./newDirectory');
// console.log(`${newDir} Directory have been created`);

// console.log('before making directory')
// fs.rmdir('./LastDirectory',err => console.log(err))
// console.log('file has been created')
/*=========================================================*/
// Node Modules Examples

// console.log(chalk.blue("Hello world")) // color blue

/*=========================================================*/
// util Promises Examples

// const readdir = util.promisify(fs.readdir)
// // readdir('.').then(result=> console.log(result))
// //
// async function init() {
//  const result = await readdir('./');
//  console.log(result);
// }
// init();
/*=========================================================*/
// Express Module

// app.get('/routeOne',(req,res)=>{
//     fs.readFile('students.json', (err, content) => {
//     res.write(content);
//     res.end();
// });
// })

// app.post('/routeOne',(req,res)=>{
    
//     res.json(req.body)
// })
// app.get('/routeTwo',(req,res)=>{
//     res.send("<h1>Hello Route Two</h1>")
// })



// app.post('/TestRoutes', (req, res) => {
//  res.send('Hello POST!');
// })

// app.get('/TestHey', (req, res) => {
//  fs.createReadStream(path.join(__dirname,
// './src/static/index.html')).pipe(res);
// });


// app.listen('3000', () => {
//  console.log('Example app listening on port 3000!');
// });

// app.get('/',(req,res)=>{
//     res.send("Hello World");
    
// })

// app.get('/todos',(req,res)=>{
//     res.json({name:"yoni",age:25});
    
// })

// app.get('/testFetch',async (req,res)=>{
    
//     const fetchResp = await fetch('http://localhost:8000/todos')
//     const json = await fetchResp.json()
//     res.send(json)
    
// })

// app.get('/testPost',async (req,res)=>{
//     try{
//      const fetchResp = await fetch('http://localhost:8000/',{
//          method:'POST',
//          headers: {
//              Accept: 'application/json',
//              'Content-Type':'application/json'
//          },
//          body:JSON.stringify({
//              name:'check',
//              age:26
//          })
//      });
//      const json = await fetchResp.json();
//      res.send(json);
//     } catch(e) {
//         res.send(e);
//     }
   
// })

// app.listen('8000',()=>{
//     console.log("Server is running on port 8000")
// })
// app.use(morgan('dev'))
// app.use('/help', help);

// C:\Program Files\MongoDB\Server\5.0\bin


// app.use('/Help',getIndex)


// async function main() {
// 	const url = 'mongodb+srv://yoni:1234@cluster0.b7rbb.mongodb.net/yonib?retryWrites=true&w=majority'
//     const client = new MongoClient(url);
//     try {
//     await client.connect();
//     async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

//     await listDatabases(client);
// } catch (e) {
//     console.error(e);
// }finally {
//     await client.close();
// }

// }

// main().catch(console.error);



// const connection = await mongo.connect(url);
// const db = connection.db('yonib');
// const collection = db.collection('students')



//=================================================//

// const url = 'mongodb+srv://yoni:1234@cluster0.b7rbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const connection = await mongo.connect(url);
// const db = connection.db('')


//=================================================//
// Middleware
const logger = require('./src/middlewares/logger');
app.use(logger)

app.use(morgan('common'));
app.get('/Hello',(req,res)=>{
    res.send("Hello World")
})

const user = require('./src/modules/tests/user')
app.use('/user',user)


app.post('/Hello',(req,res)=>{
    res.send("New World")
})

app.listen('8000',()=>{
    console.log("Logged to localhost:8000")
})

//=================================================//
// דינאמי URL







//=================================================//
// ejs

// const ejs = require('./')

app.get('/:name',(req,res)=>{
    // res.render('index.ejs')
    res.render('index.ejs',{name:req.params.name})
})




//=================================================//

// const fileName = 'students.json'
// const initialTodos = [];

// const store = {
//  async read() {
//  try {
//  await fs.access(fileName);
//  this.todos = JSON.parse((await fs.readFile(fileName)).toString());
//  } catch (e) {
//  this.todos = initialTodos;
//  }
//  return this.todos;
//  },
//  async save() {
//      try{
//           await fs.writeFile(fileName, JSON.stringify(this.todos));
//      }catch(e){
//          console.log('ERROR YONI',e)
//      }
//  },
//  async getIndexById(id) {
//  try {
//  const todos = await this.read();
//  return todos.findIndex(todo => todo.id === +id);
//  } catch (e) {
//  console.log(e);
//  }
//  },
//  async getNextTodoId() {
//  let maxId = 1;
//  const todos = await this.read();
//  todos.forEach(todo => {
//  if (todo.id > maxId) maxId = todo.id;
//  });
//  return maxId + 1;
//  },
//  todos: []
// };