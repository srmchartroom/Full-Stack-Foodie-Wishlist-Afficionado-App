// Import MySQL connection.
const connection = require("../config/connection.js");

//! TODO Create the methods that will execute the necessary MySQL commands in the controllers.
// METHODS NEEDED TO RETRIEVE & STORE DATA IN THE DB:

const orm = {
  //! DONE... DO NOT TOUCH...
  // Selects all foods (both those not eaten and those that been eaten)...
  selectAll: function (cb) {
    connection.query("SELECT * FROM food_list", function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //! DONE... DO NOT TOUCH...
  // Selects all foods that haven't been eaten yet...
  selectAllToEat: function (cb) {
    connection.query("SELECT * FROM food_list WHERE devoured = false", (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //! DONE... DO NOT TOUCH...
  // Selects all foods that have been eaten...
  selectAllAte: function (cb) {
    connection.query("SELECT * FROM food_list WHERE devoured = true", (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //! DONE .... DO NOT TOUCH ...
  // Inserts a new burger into the wishlist
  insertOne: function (name, descrip, price, restaurant, cb) {
    connection.query(
      `INSERT INTO food_list (food_name, food_descrip, price, food_type, restaurant) VALUES (?,?,?,"burger",?) `,
      [name, descrip, price, restaurant],
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  //! DONE .... DO NOT TOUCH...
  // Updates the burger to be devoured when button clicked
  updateOne: function (burgerId, cb) {
    connection.query(`UPDATE food_list SET devoured = true WHERE id = ?`, [burgerId], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //! DONE... DO NOT TOUCH....
  // Deletes the burger from the list altogether
  deleteOne: function (burgerId, cb) {
    connection.query(`DELETE FROM food_list WHERE id = ?`, [burgerId], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
}; // END OF ORM OBJECT

// Export the orm object for the model (food.js).
module.exports = orm;
