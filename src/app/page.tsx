import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", borderBottom: "1px solid var(--border)" }}>
      {/* Background Elements */}
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="container section-pad" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "100vh" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "64px", alignItems: "center" }}>
          
          {/* Content Side */}
          <div style={{ maxWidth: "600px", animation: "fadeUp 0.8s forwards" }}>
            <div className="eyebrow" style={{ marginBottom: "24px" }}>The Ojas Way</div>
            <h1 className="title-large" style={{ marginBottom: "24px", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              A Personal <span>Energy Report.</span>
            </h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
              <p className="subtitle" style={{ fontSize: "1.1rem", fontStyle: "normal", color: "var(--cream)" }}>
                Most assessments measure what is wrong with you. This one reads how your energy currently <em>moves</em> — where it races, where it heats, where it pools, where it has quietly thinned.
              </p>
              <p className="subtitle" style={{ fontSize: "1.1rem", fontStyle: "normal", color: "var(--cream)" }}>
                In a few unhurried minutes you'll receive an editorial portrait of your present energetic signature, drawn from the somatic logic of classical Ayurveda and written for a modern life.
              </p>
              <p className="subtitle" style={{ fontSize: "1.1rem", fontStyle: "italic", color: "var(--gold)", marginTop: "16px" }}>
                There are no right answers. Only honest ones.
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", borderTop: "1px solid var(--border)", paddingTop: "32px", marginBottom: "48px" }}>
              <div>
                <div className="text-mono" style={{ fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--dim)", marginBottom: "6px" }}>Commitment</div>
                <div className="text-sans" style={{ fontSize: "0.85rem", color: "var(--cream2)" }}>Long-Term Health</div>
              </div>
              <div>
                <div className="text-mono" style={{ fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--dim)", marginBottom: "6px" }}>Ecosystem</div>
                <div className="text-sans" style={{ fontSize: "0.85rem", color: "var(--cream2)" }}>Community Driven</div>
              </div>
            </div>
            
            <Link href="/assessment" className="btn-primary" style={{ display: "inline-block", textAlign: "center", textDecoration: "none", maxWidth: "400px" }}>
              Begin the reading
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
