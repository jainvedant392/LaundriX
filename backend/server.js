const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;
const cors = require("cors");
const connectDB = require("./config/db");
const {errorMiddleware} = require("./middlewares/errorMiddleware");
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

// app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}, go to http://localhost:${port}`.yellow.bold);
});
