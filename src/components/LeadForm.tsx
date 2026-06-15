"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OutcomeId } from "@/lib/scoring";

export default function LeadForm({ outcomeId }: { outcomeId?: OutcomeId }) {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, outcomeId }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      
      if (outcomeId) {
        router.push(`/assessment/result?outcome=${outcomeId}&email=${encodeURIComponent(formData.email)}`);
      } else {
        router.push(`/`);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card-pad" style={{ border: "1px solid var(--gold)", background: "var(--card)" }}>
        <h3 className="text-serif" style={{ fontSize: "2rem", marginBottom: "16px" }}>Generating your report...</h3>
        <p className="text-sans" style={{ color: "var(--cream2)" }}>Please wait while we finalize your assessment.</p>
      </div>
    );
  }

  return (
    <div className="card-pad" style={{ border: "1px solid var(--border)", background: "var(--card)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--gold), var(--saffron), transparent)" }}></div>
      <h3 className="text-serif" style={{ fontSize: "2rem", color: "var(--cream)", marginBottom: "24px", fontWeight: 400 }}>Before we begin.</h3>
      <p className="text-sans" style={{ color: "var(--dim)", marginBottom: "12px", fontSize: "0.9rem" }}>
        This report is a work of reflection, not diagnosis. It offers an editorial interpretation of your energy patterns for self-understanding and lifestyle insight. It is not medical advice and does not replace consultation with a qualified physician.
      </p>
      <p className="text-sans" style={{ color: "var(--dim)", marginBottom: "24px", fontSize: "0.9rem" }}>
        To prepare and send your personalised report, we'll ask for your email. We use it to deliver your results and occasional notes from OJAS WAY — and you can step away from those at any time, with a single click. Your responses are held in confidence and used only to prepare your reading.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Full Name</label>
          <input className="form-input" id="name" type="text" required placeholder="Your full name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email Address</label>
          <input className="form-input" id="email" type="email" required placeholder="you@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone Number</label>
          <input className="form-input" id="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
        </div>
        
        <div style={{ display: "flex", gap: "12px", marginBottom: "24px", alignItems: "flex-start" }}>
          <input type="checkbox" id="consent" required checked={consent} onChange={e => setConsent(e.target.checked)} style={{ marginTop: "4px" }} />
          <label htmlFor="consent" className="text-sans" style={{ fontSize: "0.8rem", color: "var(--dim)", lineHeight: 1.5 }}>
            I understand this report is for reflection and is not medical advice, and I'm happy to receive my results and occasional notes from OJAS WAY by email.
          </label>
        </div>

        {status === "error" && (
          <p className="text-sans" style={{ color: "var(--saffron)", marginBottom: "16px", fontSize: "0.85rem" }}>Something went wrong. Please try again.</p>
        )}
        
        <button className="btn-primary" type="submit" disabled={status === "submitting" || !consent}>
          {status === "submitting" ? "Calculating..." : "Reveal my energy signature"}
        </button>
      </form>
    </div>
  );
}
