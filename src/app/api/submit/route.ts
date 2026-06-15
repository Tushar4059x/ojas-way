import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getEmailTemplate } from '@/lib/emailTemplates';
import { OutcomeId } from '@/lib/scoring';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, outcomeId } = body;
    
    // 1. Google Sheets Logic
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === "error") {
          console.error("Google Apps Script Error:", data.message);
        }
      } else {
        console.error("Google Script returned status", response.status);
      }
    } else {
      console.warn("GOOGLE_SCRIPT_URL not configured. Skipping sheets logging.");
    }

    // 2. Nodemailer Email Logic
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD && outcomeId && email) {
      const emailContent = getEmailTemplate(outcomeId as OutcomeId, name);
      if (emailContent) {
        try {
          const info = await transporter.sendMail({
            from: `"The OJAS WAY" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: emailContent.subject,
            html: emailContent.html,
          });
          console.log("Email sent successfully:", info.messageId);
        } catch (error) {
          console.error("Nodemailer Error:", error);
          // We don't throw here so that Google Sheets still succeeds even if email fails
        }
      }
    } else {
       console.warn("GMAIL_USER or GMAIL_APP_PASSWORD not configured. Skipping email delivery.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
