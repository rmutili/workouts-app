import express from "express";

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
router.post("/", (req, res) => {
  res.json({ messg: "POST a workout" });
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
