// ------------------------------------------
// Dependencies
// ------------------------------------------
const fs = require("fs");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const https = require("https");
const morgan = require("morgan");
const express = require("express");

// ------------------------------------------
// Import Middleware & Config
// ------------------------------------------

// -----------------------------------------
// SSL Cert & Keys
// -----------------------------------------

// ------------------------------------------
// App
// ------------------------------------------
const app = express();

// ------------------------------------------
// default middlewares
// ------------------------------------------
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send("API is working !!");
});

// ------------------------------------------
// Public Route
// ------------------------------------------

// ------------------------------------------
// Checking API Key
// ------------------------------------------
// app.use(validateApiKey);

// ------------------------------------------
// Routes
// ------------------------------------------

// ------------------------------------------
// Error Handler
// ------------------------------------------
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    status: error.status || 500,
    message: error.message,
  });
});

// ------------------------------------------
// Listening to app
// ------------------------------------------
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
