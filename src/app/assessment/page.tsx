"use client";

import { useState } from "react";
import { questions, Vector } from "@/lib/questions";
import { calculateOutcome, OutcomeId } from "@/lib/scoring";
import LeadForm from "@/components/LeadForm";

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Vector[]>([]);
  const [outcomeId, setOutcomeId] = useState<OutcomeId | null>(null);

  const handleOptionSelect = (vector: Vector) => {
    const newAnswers = [...answers, vector];
    
    if (currentStep < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentStep(currentStep + 1);
    } else {
      // Finished
      setAnswers(newAnswers);
      const outcome = calculateOutcome(newAnswers);
      setOutcomeId(outcome);
      setCurrentStep(currentStep + 1); // move past last question
    }
  };

  const progress = (currentStep / questions.length) * 100;

  if (currentStep >= questions.length && outcomeId) {
    return (
      <main style={{ minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column", padding: "80px 40px" }}>
        <div className="container" style={{ maxWidth: "600px", zIndex: 1, position: "relative", margin: "auto" }}>
          <LeadForm outcomeId={outcomeId} />
        </div>
      </main>
    );
  }

  const question = questions[currentStep];

  return (
    <main style={{ minHeight: "100vh", position: "relative", display: "flex", flexDirection: "column" }}>
      {/* Progress bar */}
      <div style={{ height: "4px", background: "var(--border2)", width: "100%", position: "fixed", top: 0, left: 0, zIndex: 100 }}>
        <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, var(--gold), var(--saffron))", transition: "width 0.4s ease" }}></div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, padding: "80px 40px", maxWidth: "800px" }}>
        
        <div style={{ animation: "fadeIn 0.5s" }} key={question.id}>
          <div className="text-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
            Module {Math.ceil(question.id / 5)} — {question.module} &nbsp;&nbsp;|&nbsp;&nbsp; {question.id} / 15
          </div>
          
          <h2 className="text-serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--cream)", marginBottom: "48px", lineHeight: 1.2 }}>
            {question.text}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {question.options.map((option, index) => (
              <button 
                key={index}
                onClick={() => handleOptionSelect(option.vector)}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  padding: "24px",
                  textAlign: "left",
                  cursor: "pointer",
                  color: "var(--cream2)",
                  fontFamily: "var(--fb)",
                  fontSize: "1.05rem",
                  lineHeight: 1.5,
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.background = "var(--card2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--card)";
                }}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
