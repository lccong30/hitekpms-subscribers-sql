const Sequelize = require("sequelize");

const sequelize = new Sequelize("DemoHitek", "sa", "1234$", {
  host: "localhost",
  dialect: "mssql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
