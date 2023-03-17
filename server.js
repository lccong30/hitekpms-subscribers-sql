const express = require("express");
const cors = require("cors");
require("dotenv").config;

const db = require("./config/db");
const subscriberCtrl = require("./app/controllers/subscriberCtrl");
const initRoutes = require("./app/routes");

const port = 5000;

const app = express();
app.use(cors());
//express doc hieu data client gui len
app.use(express.json());
//Doc duoc data theo kieu object array
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

const dbConnect = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
dbConnect();
initRoutes(app);

app.use("/", (req, res) => {
  res.send("SERVER ON");
});

app.listen(5000, () => {
  console.log("Server is running on port " + port);
});
