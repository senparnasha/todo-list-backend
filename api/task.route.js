const router = require("express").Router();
const { addtask,viewTask, updateTask, deleteTask} = require("./task.controller");


router.post("/addtask", addtask);
router.get("/viewtask", viewTask);
router.put("/updatetask", updateTask);
router.post("/deletetask", deleteTask);




module.exports = router;