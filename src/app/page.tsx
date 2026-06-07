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
            <h1 className="title-large" style={{ marginBottom: "24px" }}>
              Redefining <span>Wellness.</span>
            </h1>
            <p className="subtitle" style={{ marginBottom: "48px" }}>
              Join a movement that empowers you to live better, learn the true science of health, and grow alongside a community of pioneers.
            </p>
            
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
              Take the Imbalance Assessment
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
