import mailData from "../models/mailDataModel.js";
import { mailer, mailerAdmin } from "../helper/mailHandler.js";

const mailController = {
  sendMail: async (req, res) => {
    const newMail = new mailData({
      Name: req.body.Name,
      Email: req.body.Email,
      Message: req.body.Message,
    });
    try {
      const mailAdded = await newMail.save();
      res.status(200).json({ "Mail Added": mailAdded });
      let { Name, Email, Message } = req.body;
      console.log(Name);
      await mailer(Email, Name);
      await mailerAdmin(Name, Email, Message);
    } catch (err) {
      res.status(400).json({ "Error:": err });
    }
  },
};

export default mailController;
