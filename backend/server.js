import express from "express";
import dotenv from "dotenv";
import workouts from "./routes/workouts.js";

dotenv.config();

//express app
const app = express();

// middleware
app.use(express.json()); // for parsing application/json (req.body)

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workouts);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(PORT, () =>
  console.log(`Server running on a ${MODE} mode on port ${PORT}`)
);
