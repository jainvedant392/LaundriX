const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
// const { errorMiddleware } = require("./middlewares/errorMiddleware");
const User = require("./models/userModel");

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const user = new User({
      username,
      email,
      password,
      confirmPassword,
    });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// app.use(errorMiddleware);

app.listen(port, () => {
  console.log(
    `Server is running on port ${port}, go to http://localhost:${port}`.yellow
      .bold
  );
});
