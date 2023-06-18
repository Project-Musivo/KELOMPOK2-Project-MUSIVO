const sequelize = require("../models/index").sequelize;
const { DataTypes } = require("sequelize");

// models
const Genre = require("../models/genre")(sequelize, DataTypes);

module.exports = { Genre };
