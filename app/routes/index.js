const subscriberRouter = require("./subscriber");

const initRoutes = (app) => {
  app.use("/api/pms", subscriberRouter);
};

module.exports = initRoutes;
