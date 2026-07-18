const express = require("express");
const router = express.Router();
const upload = require("../utils/storage");
const {
  createTodo,
  allTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

router.post("/todo", upload.single("image"), createTodo);
router.get("/allTodo", allTodo);
router.delete("/delete/:id", deleteTodo);
router.post("/update/:id", upload.single("image"), updateTodo);

module.exports = router;
