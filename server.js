const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path"); // Add the path module
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const connectDB = require("./db/connect");

const router = express.Router();
app.use(router);
app.use(express.json());

//use static file like css and js and html
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "templates")));
app.use(bodyParser.urlencoded({ extended: false }));

//routes and middlewares
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/signup.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/login.html"));
});

const port = process.env.PORT | 3000;
app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});
