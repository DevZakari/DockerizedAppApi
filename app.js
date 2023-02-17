import express from 'express';
import cors from 'cors';
import fetch from "node-fetch"

const app = express()

app.use(cors())


app.get('/', async (req, res) => {

  const todos = await fetch("https://jsonplaceholder.typicode.com/todos/");
  var data = await todos.json();

  if(data){
    res.status(200).json(data);
  }else {

    res.status(500).json({
      success: false,
      message: "Failed",
    });
  }

 })

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})