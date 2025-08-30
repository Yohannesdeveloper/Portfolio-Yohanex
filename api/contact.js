import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_USER, // your Gmail
        pass: process.env.NODEMAILER_PASS, // App password
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.NODEMAILER_USER, // Gmail
        replyTo: email,                     // sender
        to: process.env.NODEMAILER_USER,
        subject: `New message from ${name}`,
        text: message,
      });

      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Email failed" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
