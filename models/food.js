// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

//! DONE ... DO NOT TOUCH ....
//! Create the code to call the ORM functions using food specific input for the ORM
const food = {
  selectAllToEat: function (cb) {
    orm.selectAllToEat(function (res) {
      cb(res);
    });
  },
  selectAllAte: function (cb) {
    orm.selectAllAte(function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne(cols, vals, function (res) {
      cb(res);
    });
  },

  // An example of objColVals would be {id: 3, devoured: true}
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne(objColVals, condition, function (res) {
      cb(res);
    });
  },

  deleteOne: function (condition, cb) {
    orm.deleteOne(condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (f_controller.js).
module.exports = food;
