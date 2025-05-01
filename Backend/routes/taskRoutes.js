const express = require("express");
const Student = require("../models/Task");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.use(authMiddleware);

router.post("/", async (req, res) => {
  const student = new Student({ ...req.body, userId: req.user.id });
  await student.save();
  res.status(201).json(student);
});

router.get("/", async (req, res) => {
  const { priority, category, search } = req.query;
  const filter = { userId: req.user.id };
  if (priority) filter.priority = priority;
  if (category) filter.category = category;
  if (search) filter.title = { $regex: search, $options: "i" };
  const students = await Student.find(filter);
  res.json(students);
});

router.get("/:id", async (req, res) => {
  const student = await Student.findOne({ _id: req.params.id, userId: req.user.id });
  if (!student) return res.status(404).json({ error: "Student not found" });
  res.json(student);
});

router.put("/:id", async (req, res) => {
  const student = await Student.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  if (!student) return res.status(404).json({ error: "Student not found" });
  res.json(student);
});

router.delete("/:id", async (req, res) => {
  const student = await Student.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!student) return res.status(404).json({ error: "Student not found" });
  res.json({ message: "Student deleted" });
});

module.exports = router;