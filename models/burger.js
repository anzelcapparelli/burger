const orm = require("../config/orm")


// write code that will call the specific bruger functions

const burger = {
    all: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: (newBurger, cb) => {
        orm.insertOne("burgers", newBurger, (res) => {
            cb(res);
        });
    },
    update: (devouredData, criteria, cb) => {
        orm.updateOne("burgers", devouredData, criteria, (res) => {
            cb(res);
        });
    },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;