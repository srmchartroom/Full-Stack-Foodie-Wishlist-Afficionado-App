// Import MySQL connection.
const connection = require("../config/connection.js");

// Helper function for SQL syntax: loops through; converts an array of ?'s into a string vs. multiple ?'s
// E.g. instead of ['?','?','?'], turns it into a string: ['?','?','?'].toString() => "?,?,?";
function printQuestionMarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax: loops through keys; pushes key/val
// as a string int arr; skips hidden properties; adds "" if spaces in string values, then translates
// the array of strings to a comma-separated string
function objToSql(ob) {
  let arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

//! DONE... DO NOT CHANGE...

//! TODO Create the methods that will execute the necessary MySQL commands in the controllers.
// METHODS NEEDED TO RETRIEVE & STORE DATA IN THE DB:

const orm = {
  //! TODO Create selectAll() method to get all food entries in the wishlist section where devoured is true

  selectAll: function (cb) {
    // var queryString = "SELECT * FROM food_list WHERE devoured = false;";
    connection.query("SELECT * FROM food_list", function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //! TODO Create insertOne() method to create a new food entry into the wishlist

  insertOne: function (cols, vals, cb) {
    // var queryString = "INSERT INTO " + table;
    // queryString += " (";
    // queryString += cols.toString();
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ") ";

    console.log(queryString);
    connection.query(
      `INSERT INTO food_list (${cols.toString()};) VALUES ("${printQuestionMarks(vals.length)}";) `,
      vals,
      function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  //! TODO Create updateOne() method to update an existing food entry in the wishlist

  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function (objColVals, condition, cb) {
    // var queryString = "UPDATE " + table;
    // queryString += " SET ";
    // queryString += objToSql(objColVals);
    // queryString += " WHERE ";
    // queryString += condition;

    console.log(`UPDATE food_list SET ${objToSQL(objColVals)} WHERE ${condition}`);
    connection.query(`UPDATE food_list SET ${objToSQL(objColVals)} WHERE ${condition}`, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //! TODO Create deleteOne() method to permanently remove an existing item in the wishlist

  deleteOne: function (condition, cb) {
    //var queryString = "DELETE FROM " + table;
    //queryString += " WHERE ";
    //queryString += condition;

    connection.query(`DELETE FROM food_list WHERE ${condition}`, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object for the model (food.js).
module.exports = orm;
