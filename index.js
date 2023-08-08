const express = require("express");
require("./mongodb");
const cors = require("cors");
const taskRouter=require("./api/task.route");

const app = express();
app.use(cors({ origin: "http://localhost:3001" }));

//for getting data from postman
app.use(express.json());

app.use("/api", taskRouter);

app.listen(3000);
