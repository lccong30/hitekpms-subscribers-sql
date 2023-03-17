const Subscriber = require("../models/subscriber");

const subscriberCtrl = {
  create_db: async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone)
      return res.status(400).json({
        msg: "Missing inputs",
      });
    const response = await Subscriber.create(req.body);
    return res.status(200).json({
      success: response ? true : false,
      data: response ? response : "Something went wrongs",
    });
  },
  getSubscribers: async (req, res) => {
    try {
      const response = await Subscriber.findAll();
      return res.status(200).json({
        success: response ? true : false,
        data: response ? response : "Something went wrongs",
      });
    } catch (err) {
      console.log(err);
    }
  },
  process_contacted_email: async (req, res) => {
    const { uid } = req.params;
    const response = await Subscriber.update(
      { status: true },
      { where: { id: uid } }
    );
    // findByIdAndUpdate(
    //   uid,
    //   { status: true },
    //   { new: true }
    // );

    res.status(200).json({
      success: response ? true : false,
      data: response ? "Update success" : "Something went wrong",
    });
  },
  //   chua lien he
  process_uncontacted_email: async (req, res) => {
    const { uid } = req.params;
    const response = await Subscriber.update(
      { status: false },
      { where: { id: uid } }
    );
    res.status(200).json({
      success: response ? true : false,
      data: response ? response : "Something went wrong",
    });
  },
};

module.exports = subscriberCtrl;
