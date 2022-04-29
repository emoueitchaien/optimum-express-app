import nodemailer from "nodemailer";

const mail = (req, res, next) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.mailId,
      pass: process.env.mailPass,
    },
  });

  var mailOptions = {
    from: req.body.Email,
    to: process.env.mailTo,
    subject: req.body.Name,
    text: req.body.Message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      req.info = info;
    }
  });
  next();
};

export default mail;
