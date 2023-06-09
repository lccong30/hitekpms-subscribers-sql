const subscriberCtrl = require("../controllers/subscriberCtrl");

const subscriberRouter = require("express").Router();

subscriberRouter.get("/subscriber", subscriberCtrl.getSubscribers);
subscriberRouter.post("/subscriber", subscriberCtrl.create_db);

subscriberRouter.put(
  "/subscriber-contacted/:uid",
  subscriberCtrl.process_contacted_email
);
subscriberRouter.put(
  "/subscriber-contact/:uid",
  subscriberCtrl.process_uncontacted_email
);

module.exports = subscriberRouter;
