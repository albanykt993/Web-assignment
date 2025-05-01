const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema({
  title: String,
  description: String,
  dueDate: Date,
  priority: { type: String, enum: ["low", "medium", "high"] },
  category: String,
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Student", Student);