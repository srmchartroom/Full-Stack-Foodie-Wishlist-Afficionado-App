const express = require("express");

const router = express.Router();

//* Import the model (food.js) to use its database functions.

const food = require("../models/food.js");

//* Create all our routes and set up logic within those routes where required.

//* GET ROUTE (cRud - read)
router.get("/", function (req, res) {
  food.selectAll(function (data) {
    const hbsObject = {
      food_list: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// ---------------------------------------------------

//* POST ROUTE (Crud - create)
router.post("/api/food_list", (req, res) => {
  food.insertOne(
    [req.body.food_name, req.body.food_descrip, req.body.food_type, req.body.price, req.body.restaurant],
    (result) => {
      console.log("req.body: " + req.body);
      //* Send back the ID of the new burger
      res.json({ id: result.insertId });

      // res.redirect("/");
    }
  );
});

// ---------------------------------------------------

//* PUT ROUTE (crUd - update)
router.put("/api/food_list/:id", (req, res) => {
  const condition = "id = " + req.params.id;
  food.updateOne(
    {
      rating: req.body.rating,
      notes: req.body.notes,
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows == 0) {
        //* If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        console.log("Successfully Updated!");
        res.status(200).end();
      }
    }
  );
});

// ---------------------------------------------------

//* DELETE ROUTE (cruD - delete)
router.delete("/api/food_list/:id", function (req, res) {
  let id = req.params.id;
  food.deleteOne(id, (result) => {
    if (result.affectedRows == 0) {
      //* If no rows were changed, then the ID must not exist, so 404
      console.log("Delete Route: 404");
      return res.status(404).end();
    } else {
      console.log("Delete Route: 200");
      res.status(200).end();
    }
  });
});

//* Export routes for server.js to use.
module.exports = router;
