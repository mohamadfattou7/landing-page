import nodemailer from "nodemailer";

// Create the transporter using your Gmail app password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your Gmail (the one you used to create the app password)
    pass: process.env.EMAIL_PASS, // your Gmail App Password (with spaces)
  },
});

// The function to send a welcome email to a candidate
export async function sendWelcomeEmail(to: string, name: string) {
  const mailOptions = {
    from: `"AutoInterviewer" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Welcome to AutoInterviewer!",
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for registering on <strong>AutoInterviewer</strong>. We're excited to have you!</p>
      <p>You will receive details about your interview soon .</p>
      <p>Best regards,<br/>The AutoInterviewer Team</p>
    `,
  };

  // Send the email
  return transporter.sendMail(mailOptions);
}

