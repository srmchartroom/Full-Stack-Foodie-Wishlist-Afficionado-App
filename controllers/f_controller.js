//! DONE - DO NOT TOUCH...
const express = require("express");

const router = express.Router();

// Import the model (food.js) to use its database functions.
const food = require("../models/food.js");

// Create all our routes and set up logic within those routes where required.

// GET ROUTE (cRud - read)
router.get("/", function (req, res) {
  food.selectAll(function (data) {
    const hbsObject = {
      food_list: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// POST ROUTE (Crud - create)
router.post("/api/food_list", function (req, res) {
  food.insertOne(
    ["food_name", "food_descrip", "price", "food_type", "restaurant"],
    [req.body.food_name, req.body.food_descrip, req.body.price, req.body.food_type, req.body.restaurant],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

// PUT ROUTE (crUd - update)
router.put("/api/food_list/:id", function (req, res) {
  const condition = "id = " + req.params.id;
  console.log("condition", condition);
  food.updateOne(
    {
      food_name: req.body.food_name,
      food_descrip: req.body.food_descrip,
      price: req.body.price,
      food_type: req.body.food_type,
      restaurant: req.body.restaurant,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// DELETE ROUTE (cruD - delete)
router.delete("/api/food_list/:id", function (req, res) {
  const condition = "id = " + req.params.id;

  food.deleteOne(condition, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
