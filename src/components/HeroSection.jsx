const G = "#008B44";
const B = "#2398DD";

const HeroSection = () => (
  <section style={{ background: `linear-gradient(135deg, ${G} 0%, #004d25 50%, ${B} 100%)`, minHeight: 500, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
    {/* Dot pattern */}
    <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
    {/* Decorative corners */}
    <div style={{ position: "absolute", left: 0, bottom: 0, fontSize: 140, opacity: 0.15, lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>🌾</div>
    <div style={{ position: "absolute", right: 0, bottom: 0, fontSize: 140, opacity: 0.12, lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>🚜</div>

    {/* Floating bubbles */}
    {[["8%","12%","🏷️","0s"],["65%","8%","📊","0.5s"],["10%","60%","💧","1s"],["72%","55%","☀️","1.5s"]].map(([l,t,ic,d]) => (
      <div key={ic} style={{ position: "absolute", left: l, top: t, background: "rgba(255,255,255,0.18)", borderRadius: 14, padding: "10px 14px", fontSize: 22, border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", animation: `float 4s ease-in-out ${d} infinite` }}>{ic}</div>
    ))}

    <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "60px 20px", maxWidth: 760, margin: "0 auto" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 600, padding: "6px 18px", borderRadius: 20, marginBottom: 24, border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(6px)" }}>
        ✦ Price History &amp; Crop Tracker
      </div>

      <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: "0 0 8px", fontFamily: "Georgia, serif" }}>
        Find <span style={{ color: "#7fff9e" }}>Real Deals</span>
      </h1>
      <h1 style={{ fontSize: "clamp(36px,6vw,64px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: "0 0 20px", fontFamily: "Georgia, serif" }}>
        Skip the Fake Ones
      </h1>

      <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "clamp(15px,2vw,18px)", marginBottom: 36, fontWeight: 500 }}>
        Track genuine price drops, compare across mandis, and farm smarter every day
      </p>

      {/* Search bar */}
      <div style={{ display: "flex", alignItems: "center", background: "#fff", borderRadius: 50, boxShadow: "0 8px 32px rgba(0,0,0,0.25)", maxWidth: 680, margin: "0 auto", padding: "4px 4px 4px 18px" }}>
        <span style={{ color: "#aaa", fontSize: 18 }}>🔍</span>
        <input placeholder="Paste a Mandi / AgriMart link or Search a Crop" style={{ flex: 1, border: "none", outline: "none", padding: "14px 10px", fontSize: 14, color: "#555", background: "transparent", fontFamily: "inherit" }} />
        <span style={{ fontSize: 18, marginRight: 6, cursor: "pointer" }}>🎙️</span>
        <button style={{ background: G, color: "#fff", border: "none", borderRadius: 40, padding: "12px 28px", fontSize: 14, fontWeight: 800, cursor: "pointer", whiteSpace: "nowrap" }}>Search</button>
      </div>
    </div>

    {/* Bottom strip */}
    <div style={{ background: "rgba(0,50,25,0.85)", color: "#fff", fontSize: 13, fontWeight: 600, padding: "12px 20px", textAlign: "center", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 10, position: "relative", zIndex: 2 }}>
      <span style={{ color: "#7fff9e" }}>✦</span>
      <span style={{ fontWeight: 800 }}>Magic Trick for Smart Farming</span>
      <span style={{ color: "#7fff9e" }}>✦</span>
      <span>Type</span>
      <span style={{ background: B, color: "#fff", fontWeight: 800, padding: "2px 12px", borderRadius: 20, fontSize: 12 }}>agrihatke.com/Mandi</span>
      <span>before ANY product link</span>
    </div>

    <style>{`@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }`}</style>
  </section>
);

export default HeroSection;