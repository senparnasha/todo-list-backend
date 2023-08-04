const express = require("express");

const dbConnect = require("./mongodb");
const cors = require('cors')
const mongodb = require("mongodb");
const uuid=require("uuid");

const app = express();
app.use(cors({ origin: 'http://localhost:3001' }));
// //for getting data from postman
app.use(express.json());



//view data 
app.get("/viewtask", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
});


//create data 
app.post("/addtask", async (req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne({
    "task_id":uuid.v4(),
    "task":req.body.task
  });
  console.log(result);
  res.send(result);
});


// update task
app.put("/updatetask", async (req, res) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { task_id: req.body.task_id },
    {
      $set: {task:req.body.task}
    }
  );
  console.log(result);
  res.send(result);
});

app.post("/deletetask", async (req, res) => {
console.log(req.body.task_id)
  let data = await dbConnect();
  let result = await data.deleteOne({
    task_id: req.body.task_id,
  });
  res.send(result);
});



app.listen(3000);
