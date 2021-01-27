// Import MySQL connection.
const connection = require("../config/connection");

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


    insertOne: (selTable, newRowData, cb) => {
        const queryString = "INSERT INTO ?? SET ?";
        const values = [selTable, newRowData];

        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


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