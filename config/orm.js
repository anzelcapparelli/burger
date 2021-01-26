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

    updateOne: (table, updateValues, condition, cb) => {
        const queryString = "UPDATE ?? SET ? WHERE ? LIMIT 1";
        const values = [table, updateValues, condition];

        console.log(queryString);
        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
}


module.exports = orm;