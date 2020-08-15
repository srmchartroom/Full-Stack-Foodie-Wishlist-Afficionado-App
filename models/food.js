// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

//* Creates the code to call the ORM functions using food specific input for the ORM
const food = {
  selectAll: function (cb) {
    orm.selectAll((res) => {
      cb(res);
    });
  },

  // ---------------------------------------------------

  insertOne: function (vals, cb) {
    orm.insertOne(vals, (res) => {
      cb(res);
    });
  },

  // ---------------------------------------------------

  updateOne: function (objColVals, condition, cb) {
    orm.updateOne(objColVals, condition, (res) => {
      cb(res);
    });
  },

  // ---------------------------------------------------

  deleteOne: function (foodId, cb) {
    orm.deleteOne(foodId, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller (f_controller.js).
module.exports = food;
