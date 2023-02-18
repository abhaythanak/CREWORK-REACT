const express = require("express")
const app = express();
app.use(express.json());
const bodyParser = require('body-parser');
const mongoose = require("mongoose")

app.use(bodyParser.json());

// //    middleware

// app.use('/posts',(req,res)=>{
//   console.log('this is middle wear')
// })

//  Imports Routes

const postsRoute = require("../src/routers/posts")
app.use("/posts",postsRoute);

//   Routes
app.get("/",(req,res)=> {
  res.send('home page');
})




// connect to DB

mongoose.connect("mongodb://127.0.0.1:27017/MoneyMafia",
{ useNewUrlParser: true } ,
(err)=>{
  if(err)
  {
    console.log(err)
  }else{
    console.log("connected to DB!!!!")
  }
}
)

//    listen server

app.listen(3000,()=>{
  console.log("Live on Port 3000!!!!!!!")
});

//  // Storing a reference to the database so you can use it later
//  db = client.db(dbName)
//  console.log(`Connected MongoDB: ${url}`)
//  console.log(`Database: ${dbName}`)
// })
