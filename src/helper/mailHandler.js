import nodemailer from "nodemailer";
import "dotenv/config";
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.mailId,
    pass: process.env.mailPass,
  },
});
export async function mailer(mailTo, name) {
  try {
    await transporter.sendMail({
      from: process.env.mailId,
      to: mailTo,
      subject: "Thank You for Reaching Out!",
      text: `Dear ${name}! Thank you for visiting my website. I have recieved your message and I will contact you back ASAP.
      <br>Yours,<br>Mohan Pradhan`,
      html: `Dear ${name}! Thank you for visiting my website. I have recieved your message and I will contact you back ASAP.
      <br>Yours,<br>Mohan Pradhan`,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
export async function mailerAdmin(name, email, message) {
  try {
    await transporter.sendMail({
      from: process.env.mailId,
      to: process.env.mailTo,
      subject: `${name}`,
      text: `Received message at ${new Date().toDateString()}.
        Sender Name: ${name} , email Address: ${email},[ ${message} ]`,
      html: `Received message at <b>${new Date().toDateString()}.</b><br/><br />
      <b>Sender Name:</b> <i>${name},</i><br/><br/>
      <b>Email ID:</b> <i>${email},</i> <br/><br/>
       <b>Message:</b><br/>
       <br/>
        ${message}
        <br/>
      `,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
