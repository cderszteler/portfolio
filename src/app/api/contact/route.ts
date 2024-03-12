import nodemailer from "nodemailer";
import {config, validForm} from "@/lib/mail";

export async function POST(request: Request) {
  const body = await request.json()
  if (!validForm(body?.firstName, body?.lastName, body?.email, body?.message)) {
    return Response.json({message: "Invalid request body"}, { status: 404 })
  }

  const transporter = nodemailer.createTransport(config)
  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_RECEIVER,
      subject: `Contact from ${body?.firstName} ${body?.lastName}`,
      text:
        `
        A new message has been send via the contact form:

        First name: ${body?.firstName}
        Last name: ${body?.lastName}
        Email: ${body?.email}
        Content:
        ${body?.message}

        --End of message--
        `
    })
    return Response.json({}, { status: 200 })
  } catch (error) {
    console.log("An error occurred when sending email issued by contact form:")
    console.log(error)
    console.log(body)
    return Response.json({}, { status: 500 })
  }
}