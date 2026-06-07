import { outcomes } from "@/lib/outcomes";
import { OutcomeId } from "@/lib/scoring";
import Link from "next/link";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ outcome?: string; email?: string }>;
}) {
  const resolvedParams = await searchParams;
  const outcomeId = resolvedParams.outcome as OutcomeId | undefined;
  const outcome = outcomeId ? outcomes[outcomeId] : null;

  if (!outcome) {
    return (
      <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p className="text-sans" style={{ color: "var(--cream2)" }}>Outcome not found. <Link href="/assessment" style={{ color: "var(--gold)" }}>Take the assessment.</Link></p>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", paddingBottom: "100px" }}>
      {/* Background Elements */}
      <div className="hero-bg"></div>

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "80px", maxWidth: "800px" }}>
        <div className="eyebrow" style={{ marginBottom: "16px", color: "var(--saffron)" }}>Your Imbalance Assessment Result</div>
        <h1 className="title-large" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "48px", lineHeight: 1.1 }}>
          {outcome.title}
        </h1>

        <div className="card-pad" style={{ background: "var(--card)", border: "1px solid var(--border)", marginBottom: "40px" }}>
          <h3 className="text-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>Core State</h3>
          <p className="text-sans" style={{ fontSize: "1.05rem", color: "var(--cream2)", lineHeight: 1.8 }}>{outcome.coreState}</p>
        </div>

        <div className="grid-2" style={{ marginBottom: "40px" }}>
          <div style={{ border: "1px solid var(--border)", padding: "32px", background: "var(--bg2)" }}>
            <h3 className="text-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>Strengths</h3>
            <p className="text-sans" style={{ fontSize: "0.95rem", color: "var(--cream)", lineHeight: 1.6 }}>{outcome.strengths}</p>
          </div>
          <div style={{ border: "1px solid var(--border)", padding: "32px", background: "var(--bg2)" }}>
            <h3 className="text-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "16px" }}>Vulnerabilities</h3>
            <p className="text-sans" style={{ fontSize: "0.95rem", color: "var(--cream)", lineHeight: 1.6 }}>{outcome.vulnerabilities}</p>
          </div>
        </div>

        <div className="card-pad" style={{ background: "var(--card2)", borderLeft: "4px solid var(--gold)", marginBottom: "64px" }}>
          <h3 className="text-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>Immediate Action</h3>
          <p className="text-sans" style={{ fontSize: "1.1rem", color: "var(--cream)", lineHeight: 1.8, marginBottom: "24px" }}>{outcome.immediateAction}</p>
          <div className="text-serif" style={{ fontSize: "1.5rem", fontStyle: "italic", color: "var(--gold)" }}>"{outcome.insight}"</div>
        </div>

        <div style={{ textAlign: "center", borderTop: "1px solid var(--border)", paddingTop: "48px" }}>
          <p className="text-sans" style={{ color: "var(--dim)" }}>We have sent a full copy of your report to your email.</p>
        </div>

      </div>
    </main>
  );
}
