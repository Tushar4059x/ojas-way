import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getEmailTemplate } from '@/lib/emailTemplates';
import { OutcomeId } from '@/lib/scoring';

const resend = new Resend(process.env.RESEND_API_KEY || "mock_key");

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

    // 2. Resend Email Logic
    if (process.env.RESEND_API_KEY && outcomeId && email) {
      const emailContent = getEmailTemplate(outcomeId as OutcomeId, name);
      if (emailContent) {
        await resend.emails.send({
          from: 'OJAS WAY <hello@ojasway.com>', // Note: the user must verify this sender in Resend
          to: [email],
          subject: emailContent.subject,
          html: emailContent.html
        });
      }
    } else {
       console.warn("RESEND_API_KEY not configured. Skipping email delivery.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
