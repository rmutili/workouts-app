import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";

// Get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single workout
const getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res
        .status(404)
        .json({ message: `No workout with id: ${req.params.id}` });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a workout

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No workout with id: ${id}`);

  const workout = await Workout.findByIdAndDelete({ _id: id });

  if (!workout) return res.status(404).send(`No workout with id: ${id}`);

  res.status(200).json(`{${workout.title} workout deleted successfully.}`);
};

// Update a workout

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No workout with id: ${id}`);

  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });

  res.json(`${workout.title} workout updated successfully.`);
};

export { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout };
