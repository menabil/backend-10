const dns = require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require("express");
const {
  createTodo,
  allTodo,
  deleteTodo,
  updateTodo,
} = require("./controllers/todoController");
const cors = require("cors");
const app = express();
const dbConnection = require("./config/databaseConfig");
const upload = require("./utils/storage");

dbConnection();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post("/todo", upload.single("image"), createTodo);
app.get("/allTodo", allTodo);
app.delete("/delete/:id", deleteTodo);
app.post("/update/:id", upload.single("image"), updateTodo);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
