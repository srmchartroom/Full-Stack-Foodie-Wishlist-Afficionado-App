/*
Our ORM file (aka Object Relational Mapper) is all our SQL queries.  
Where you see "??" in the SQL query are dynamic variables that allow us to to swap table or column names.
Where you see "?" in the QL query are dynamic variables that allow us to swap out other values.
It's important to leverage dynamic variables such as this to minimize SQL injection vulnerability which 
can be catastrophic to applications and sites.  Read more about SQL injection hacks/attacks at https://en.wikipedia.org/wiki/SQL_injection .

The ORM allows us to construct our SQL queries in a more reusable way. It allows us to write SQL query functions 
so that instead of having to write these functions repeatedly, we can write the SQL query functions in way that can
be reused based on the data that is passed in.
*/

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  // Loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  // Translate array of strings to a single comma-separated string
  return arr.toString();
}

// Import MySQL connection.
const connection = require("../config/connection.js");

// METHODS NEEDED TO RETRIEVE & STORE DATA IN THE DB:
// Creates the methods that will execute the necessary MySQL commands in the controllers.

const orm = {
  // Selects all foods (both those not eaten and those that been eaten)...
  selectAll: function (cb) {
    connection.query("SELECT * FROM food_list", function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      // res.status(200).end();
    });
  },

  // ---------------------------------------------------

  // Inserts a new burger into the wishlist
  insertOne: function (vals, cb) {
    connection.query(
      "INSERT INTO food_list (food_name, food_descrip, food_type, price, restaurant) VALUES (?, ?, ?, ?, ?)",
      [vals[0], vals[1], vals[2], parseFloat(vals[3]), vals[4]],
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  // ---------------------------------------------------

  // Updates the burger to be devoured when button clicked
  updateOne: function (objColVals, condition, cb) {
    let queryString = `UPDATE food_list SET ${objToSql(objColVals)} WHERE ${condition}`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // ---------------------------------------------------

  // Deletes the burger from the list altogether
  deleteOne: function (foodId, cb) {
    connection.query(`DELETE FROM food_list WHERE id = ?`, [foodId], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
}; // END OF ORM OBJECT

// Export the orm object for the model (food.js).
module.exports = orm;
