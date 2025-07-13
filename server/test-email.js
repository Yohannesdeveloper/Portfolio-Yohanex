import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

async function sendTestEmail() {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "Test Email",
      text: "This is a test email from nodemailer",
    });

    console.log("Test email sent:", info.response);
  } catch (err) {
    console.error("Error sending test email:", err);
  }
}

sendTestEmail();
