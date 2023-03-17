const db = require("../../config/db");

const Subscriber = db.sequelize.define("subscriber", {
  id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  note: {
    type: db.Sequelize.STRING,
    allowNull: true,
  },
  status: {
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
module.exports = Subscriber;
