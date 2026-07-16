const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Mid", "High"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Active", "Block"],
    default: "Pending",
  },
  path: {
    type: String,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
