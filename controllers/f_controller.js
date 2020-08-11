const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const food = require("../models/food.js");

// Export routes for server.js to use.
module.exports = router;
