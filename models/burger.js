// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: async () => {
    const result = await orm.selectAll("burger");

    return result;
  },

  // The variables cols and vals are arrays.
  create: async (cols, vals) => {
    const result = await orm.insertOne("burger", cols, vals);

    return result;
  },

  update: async (objColVals, condition) => {
    const result = await orm.updateOne("burger", objColVals, condition);

    return result;
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
