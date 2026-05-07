const G = "#008B44";
const B = "#2398DD";

const features = [
  { icon: "📊", title: "Price History Tracker", desc: "See how crop prices have moved over days, weeks & months across all major mandis.", grad: "linear-gradient(135deg,#d1fae5,#a7f3d0)" },
  { icon: "🔔", title: "Smart Price Alerts", desc: "Set target prices and get notified instantly when crops hit your sweet spot.", grad: "linear-gradient(135deg,#dbeafe,#bfdbfe)" },
  { icon: "🛒", title: "Market Comparison", desc: "Compare prices across mandis and agri-stores in one seamless click.", grad: "linear-gradient(135deg,#d1fae5,#ccfbf1)" },
  { icon: "🌦️", title: "Weather + Crop Insights", desc: "Smart farming recommendations based on seasonal weather patterns.", grad: "linear-gradient(135deg,#e0f2fe,#bae6fd)" },
];

const FeaturesSection = () => (
  <section style={{ background: "linear-gradient(180deg,#f5faf7 0%,#fff 100%)", padding: "56px 20px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <span style={{ background: G + "18", color: G, fontSize: 11, fontWeight: 800, padding: "5px 16px", borderRadius: 20, textTransform: "uppercase", letterSpacing: 1 }}>Why AgriHatke?</span>
        <h2 style={{ fontWeight: 900, fontSize: "clamp(24px,4vw,34px)", color: "#1a2e1a", margin: "14px 0 10px", fontFamily: "Georgia, serif" }}>Farm Smarter with <span style={{ color: G }}>Real Data</span></h2>
        <p style={{ color: "#888", fontSize: 14, maxWidth: 500, margin: "0 auto" }}>Every tool you need to make better buying & selling decisions in agriculture</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginBottom: 40 }} className="feat-grid">
        {features.map((f, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 20, padding: 24, border: "1px solid #eee", boxShadow: "0 2px 12px #0006", transition: "all .25s", cursor: "default" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 10px 32px ${G}22`; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px #0006"; e.currentTarget.style.transform = "none"; }}>
            <div style={{ width: 56, height: 56, borderRadius: 18, background: f.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
            <h3 style={{ fontWeight: 900, fontSize: 15, color: "#1a2e1a", margin: "0 0 8px" }}>{f.title}</h3>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div style={{ background: `linear-gradient(90deg, ${G}, ${B})`, borderRadius: 20, padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, textAlign: "center" }} className="stats-grid">
        {[["50L+","Farmers Trust Us"],["10K+","Crops Tracked"],["500+","Mandis Listed"],["₹200Cr+","Savings Generated"]].map(([v,l]) => (
          <div key={l}>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#fff" }}>{v}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
    <style>{`@media(max-width:900px){.feat-grid{grid-template-columns:repeat(2,1fr)!important}} @media(max-width:540px){.feat-grid{grid-template-columns:1fr!important}.stats-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
  </section>
);

export default FeaturesSection;