import nodemailer from "nodemailer";

// Setup transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send welcome email
export async function sendWelcomeEmail(to: string, name: string) {
  const mailOptions = {
    from: `"AutoInterviewer" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Welcome to AutoInterviewer!",
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for registering on <strong>AutoInterviewer</strong>. We're excited to have you!</p>
      <p>You will receive details about your interview soon.</p>
      <p>Best regards,<br/>The AutoInterviewer Team</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}


