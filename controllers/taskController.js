import Task from "../models/Task.js";


export const addTask = async (req, res) => {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error adding task" });
    }
  };
  export const getTasks = async (req, res) => {
    try {
      const tasks = await Task.find({ userId: req.user.id });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching tasks" });
    }
  };
  export const updateTask = async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: "Error updating task" });
    }
  };
  export const deleteTask = async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Task deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting task" });
    }
  };