const sequelize = require("../models/index").sequelize;
const { DataTypes } = require("sequelize");

// models
const Genre = require("../models/genre")(sequelize, DataTypes);
const User = require("../models/user.js")(sequelize, DataTypes);

module.exports = { Genre , User};
