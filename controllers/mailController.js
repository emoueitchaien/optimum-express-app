import mailData from "../models/mailDataModel.js";

const mailController = {
  sendMail: async (req, res) => {
    const newMail = new mailData({
      Name: req.body.Name,
      Email: req.body.Email,
      Message: req.body.Message,
    });
    try {
      const mailAdded = await newMail.save();
      res
        .status(200)
        .json({ "Mail Added": mailAdded, "Mail Sent": req.info.response });
    } catch (err) {
      res.status(400).json({ "Error:": err });
    }
  },
};

export default mailController;
