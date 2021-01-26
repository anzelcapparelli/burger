// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {

    selectAll: (selTable, cb) => {

        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [selTable], (err, result) => {
            if (err) {
              throw err;
            }
            cb(result);
          });
    },
    
    insertOne: () => { },
    updateOne: () => { },

}


module.exports = orm;