import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { email, phone, priority, serviceType, description } = await req.json()

    // Validate the request data
    if (!email || !phone || !priority || !serviceType || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      // For production, you would use your actual email service settings
      host: process.env.EMAIL_HOST || "smtp.example.com",
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER || "user@example.com",
        pass: process.env.EMAIL_PASSWORD || "password",
      },
    })

    // Get priority text
    const priorityText =
      {
        "1": "Urgent - within 24 hrs",
        "2": "High - within 2 business days",
        "3": "Medium - within 5 business days",
        "4": "Low - within 10 business days",
      }[priority] || priority

    // Get service type text
    const serviceTypeText =
      {
        saas: "SaaS Configuration",
        email: "Email Management",
        security: "Security Solutions",
        automation: "Workflow Automation",
        ai: "AI Integration",
      }[serviceType] || serviceType

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || "website@example.com",
      to: process.env.EMAIL_TO || "your-email@example.com", // Your email address
      replyTo: email,
      subject: `New Task Submission: ${serviceTypeText} (${priorityText})`,
      text: `
        Email: ${email}
        Phone: ${phone}
        Priority: ${priorityText}
        Service Type: ${serviceTypeText}
        
        Description:
        ${description}
      `,
      html: `
        <h2>New Task Submission</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Priority:</strong> ${priorityText}</p>
        <p><strong>Service Type:</strong> ${serviceTypeText}</p>
        <h3>Description:</h3>
        <p>${description.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Task submitted successfully",
    })
  } catch (error) {
    console.error("Error in submit-task route:", error)
    return NextResponse.json({ error: "Failed to submit task. Please try again later." }, { status: 500 })
  }
}
