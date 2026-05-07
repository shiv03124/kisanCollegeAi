const G = "#008B44";
const B = "#2398DD";

const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Farmers: ["Crop Tracking", "Mandi Rates", "Price Alerts", "Market Compare"],
  Support: ["Help Center", "Contact Us", "Report a Bug", "Feedback"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Disclaimer"],
};

const Footer = () => (
  <footer style={{ background: "#0f1a0f", color: "#ccc" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 20px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr", gap: 32, marginBottom: 40 }} className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg,${G},${B})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🌾</div>
            <span style={{ fontWeight: 900, fontSize: 20, color: "#fff", fontFamily: "Georgia, serif" }}>agri<span style={{ color: B }}>hatke</span></span>
          </div>
          <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>India's #1 agriculture price tracker. Empowering farmers with real data.</p>
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            {["𝕏", "f", "in", "📸"].map(s => (
              <a key={s} href="#" style={{ width: 34, height: 34, borderRadius: 10, background: "#1e2e1e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#aaa", textDecoration: "none", transition: "background .2s" }}
                onMouseEnter={e => e.currentTarget.style.background = G}
                onMouseLeave={e => e.currentTarget.style.background = "#1e2e1e"}>{s}</a>
            ))}
          </div>
        </div>
        {/* Links */}
        {Object.entries(footerLinks).map(([sec, links]) => (
          <div key={sec}>
            <h4 style={{ color: "#fff", fontWeight: 800, fontSize: 13, marginBottom: 16 }}>{sec}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {links.map(l => <li key={l}><a href="#" style={{ fontSize: 13, color: "#888", textDecoration: "none", transition: "color .2s" }} onMouseEnter={e => e.currentTarget.style.color = "#7fff9e"} onMouseLeave={e => e.currentTarget.style.color = "#888"}>{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid #1e2e1e", paddingTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 14 }}>
        <p style={{ fontSize: 12, color: "#666", margin: 0 }}>© 2026 AgriHatke Technologies Pvt. Ltd. All rights reserved.</p>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 12, color: "#666" }}>Available on</span>
          {[["🍎", "App Store", G], ["🤖", "Play Store", B]].map(([ic, label, bg]) => (
            <button key={label} style={{ display: "flex", alignItems: "center", gap: 6, background: "#1e2e1e", color: "#fff", border: "none", borderRadius: 10, padding: "6px 14px", fontSize: 12, cursor: "pointer", transition: "background .2s" }}
              onMouseEnter={e => e.currentTarget.style.background = bg}
              onMouseLeave={e => e.currentTarget.style.background = "#1e2e1e"}>{ic} {label}</button>
          ))}
        </div>
      </div>
    </div>
    <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important}}`}</style>
  </footer>
);

export default Footer;