import express from "express";
import {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} from "../controllers/workoutController.js";

const router = express.Router();

// GET ALL WORKOUTS
router.get("/", getWorkouts);

// GET A SINGLE WORKOUT
router.get("/:id", getWorkout);

// POST A WORKOUT
router.post("/", createWorkout);

// DELETE A WORKOUT
router.delete("/:id", deleteWorkout);

// UPDATE A WORKOUT
router.patch("/:id", updateWorkout);

export default router;
