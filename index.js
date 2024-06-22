const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./routes/tasks");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/tasks", taskRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/task")
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
