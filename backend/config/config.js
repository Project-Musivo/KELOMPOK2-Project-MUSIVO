require("dotenv").config();

module.exports = {
  development: {
    username: process.env.UNAME_DB,
    password: process.env.PASS_DB,
    database: process.env.MUSIVO_DB,
    host: process.env.HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
