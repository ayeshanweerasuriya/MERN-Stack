require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRouter = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRouter);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then((response) => {
    console.log("Database connected successfully..");
    app.listen(process.env.PORT, () => {
      console.log("Listening to port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
