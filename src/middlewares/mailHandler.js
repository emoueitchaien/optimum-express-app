import nodemailer from "nodemailer";

const mail = (req, res, next) => {
  var transporter = nodemailer.createTransport({
    //Using Gmail
    // service: "gmail",

    //Using Mail Trap
    host: process.env.mailHost,
    port: process.env.mailPort,
    auth: {
      user: process.env.mailUserAndFrom,
      pass: process.env.mailPass,
    },
  });

  var mailOptions = {
    from: process.env.mailUserAndFrom,
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
