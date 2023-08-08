// const mongoose=require("mongoose")
// const todolistSche = new mongoose.Schema({
//     task_id:String,
//     task: String
//      });

//    const collection= mongoose.model('todolist',todolistSche);
//    module.exports= collection;

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task_id: {
    type: String,
    required: true,
    unique: true
  },
  task: {
    type: String,
    required: true
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
