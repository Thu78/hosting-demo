const express = require("express");
const sls = require("serverless-http");
const cors = require("cors");

// Loads environment variables
require("dotenv").config();
// Heroku will automatically have its own port
const app = express();
app.use(express.json());
app.use(cors());

// Create an API Route: should be available on -> localhost:5000/hello
app.get("/hello", (req, res) => {
  res.json({ msg: "Testing, sending hellos" });
});

module.exports.server = sls(app);
