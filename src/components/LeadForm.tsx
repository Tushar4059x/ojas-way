"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { OutcomeId } from "@/lib/scoring";

export default function LeadForm({ outcomeId }: { outcomeId?: OutcomeId }) {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
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
      <div style={{ padding: "40px", border: "1px solid var(--gold)", background: "var(--card)" }}>
        <h3 className="text-serif" style={{ fontSize: "2rem", marginBottom: "16px" }}>Generating your report...</h3>
        <p className="text-sans" style={{ color: "var(--cream2)" }}>Please wait while we finalize your assessment.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", border: "1px solid var(--border)", background: "var(--card)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, var(--gold), var(--saffron), transparent)" }}></div>
      <h3 className="text-serif" style={{ fontSize: "2rem", color: "var(--cream)", marginBottom: "24px", fontWeight: 400 }}>Unlock Your Report</h3>
      <p className="text-sans" style={{ color: "var(--dim)", marginBottom: "24px", fontSize: "0.9rem" }}>
        Your assessment is complete. Enter your details below to reveal your archetype and receive your personalized protocol.
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
        
        {status === "error" && (
          <p className="text-sans" style={{ color: "var(--saffron)", marginBottom: "16px", fontSize: "0.85rem" }}>Something went wrong. Please try again.</p>
        )}
        
        <button className="btn-primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Calculating..." : "Reveal My Outcome"}
        </button>
      </form>
    </div>
  );
}
