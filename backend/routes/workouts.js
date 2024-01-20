import express from "express";
import Workout from "../models/workoutModel.js";

const router = express.Router();

// GET ALL WORKOUTS
router.get("/", (req, res) => {
  res.json({ messg: "GET all workouts" });
});

// GET A SINGLE WORKOUT
router.get("/:id", (req, res) => {
  res.json({ messg: "GET a single workout" });
});

// POST A WORKOUT
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE A WORKOUT
router.delete("/:id", (req, res) => {
  res.json({ messg: "DELETE a workout" });
});

// UPDATE A WORKOUT
router.patch("/:id", (req, res) => {
  res.json({ messg: "UPDATE A WORKOUT" });
});

export default router;
