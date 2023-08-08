const Task = require("../model/tasks");
const uuid = require("uuid");

const addtask = async (req, res) => {
  console.log("coming to the task controller..");

  const newTask = new Task({
    task_id: uuid.v4(),
    task: req.body.task,
  });

  try {
    const savedTask = await newTask.save();
    console.log("Task saved:", savedTask);
    res.send(savedTask);
  } catch (error) {
    console.error("Error saving task:", error);
  }
};

const viewTask = async (req, res) => {
  data = await Task.find();
  console.log(data);
  res.send(data);
};

const updateTask = async (req, res) => {
  try {
    const result = await Task.updateOne(
      { task_id: req.body.task_id },
      {
        $set: { task: req.body.task },
      }
    );

    console.log(result);
    res.send(result);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).send("Error updating task");
  }
};

const deleteTask = async (req, res) => {
  try {
    const result = await Task.deleteOne({
      task_id: req.body.task_id,
    });
    res.send(result);
  } catch (err) {
    console.log("data not deleted");
  }
};

module.exports = { addtask, viewTask, updateTask, deleteTask };
