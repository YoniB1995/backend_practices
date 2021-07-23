const express = require('express')
const app = express();
// const Http = require('http')
const fs = require('fs')

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
// fs.mkdir('./newFile',err => console.log(err))

/*=========================================================*/
// Express Module

app.get('/routeOne',(req,res)=>{
    res.send("<h1>Hello Route One</h1>")
})
app.get('/routeTwo',(req,res)=>{
    res.send("<h1>Hello Route Two</h1>")
})

app.listen('8000',()=>{
    console.log("Server is running on port 8000")
})









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