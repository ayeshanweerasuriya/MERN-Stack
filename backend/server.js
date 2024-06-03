require("dotenv").config();
const express = require("express");
const workoutRouter = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRouter);

app.listen(process.env.PORT, () => {
  console.log("listening to port", process.env.PORT);
});
