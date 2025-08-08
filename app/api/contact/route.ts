
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();
  console.log(process.env.NODEMAILER_USER, process.env.SMTP_SERVICE, process.env.NODEMAILER_PASS)

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"sender@bereket.me" <sender@bereket.me>',
      to: "workumyfather@gmail.com",
      subject: subject,
      replyTo: email,
      html: `
        <h2>Details</h2>
        <ul>
            <li>Email: ${email}</li>
        </ul>
        <h2>Message</h2>
      <p>${message}</p>
      `,
    });
    return NextResponse.json(
      { message: "Form sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error, try it again." },
      { status: 500 }
    );
  }
}
