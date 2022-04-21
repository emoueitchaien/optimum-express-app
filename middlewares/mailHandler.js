import nodemailer from "nodemailer";
let gmailpass = process.env.gmailpass;

const mail = (req, res, next) => {
  var transporter = nodemailer.createTransport({
    //Using Gmail
    // service: "gmail",

    //Using Mail Trap
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "da03a1b1aa772c",
      pass: "28ad684513b9bb",
    },
  });

  var mailOptions = {
    from: "da03a1b1aa772c",
    to: "nezukoyaiba28@gmail.com",
    subject: req.body.Name,
    text: req.body.Message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  next();
};

export default mail;
