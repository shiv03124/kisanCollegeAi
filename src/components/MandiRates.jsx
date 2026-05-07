const G = "#008B44";
const B = "#2398DD";

const mandiData = [
  { crop: "Wheat", mandi: "Azadpur, Delhi", price: "₹2,180", change: "+2.3%", up: true },
  { crop: "Basmati Rice", mandi: "Amritsar, Punjab", price: "₹3,850", change: "-1.4%", up: false },
  { crop: "Tomato", mandi: "Nashik, Maharashtra", price: "₹42", change: "+8.7%", up: true },
  { crop: "Onion", mandi: "Lasalgaon, Maharashtra", price: "₹28", change: "-5.2%", up: false },
  { crop: "Cotton", mandi: "Rajkot, Gujarat", price: "₹6,450", change: "+1.1%", up: true },
  { crop: "Soybean", mandi: "Indore, MP", price: "₹4,220", change: "+0.8%", up: true },
];

const stores = [
  { name: "AgriMart", icon: "🌾", rating: 4.5, deals: 240 },
  { name: "KisanStore", icon: "👨‍🌾", rating: 4.3, deals: 185 },
  { name: "FarmFresh", icon: "🥬", rating: 4.7, deals: 310 },
  { name: "Mandi Direct", icon: "🏪", rating: 4.1, deals: 95 },
];

const MandiRates = () => (
  <section style={{ padding: "0 20px 48px", maxWidth: 1200, margin: "0 auto" }}>
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }} className="mandi-grid">
      {/* Rates Table */}
      <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e8f5e9", boxShadow: "0 2px 12px #0006", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #f0f0f0", background: "linear-gradient(90deg, #f0faf4, #e8f5fd)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "#22c55e", display: "inline-block", animation: "pulse 2s infinite" }} />
            <span style={{ fontWeight: 900, fontSize: 15, color: "#1a2e1a" }}>Live Mandi Rates</span>
          </div>
          <a href="#" style={{ color: B, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>View All Mandis →</a>
        </div>
        {mandiData.map((r, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: i < mandiData.length - 1 ? "1px solid #fafafa" : "none", transition: "background .2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "#f8fdf9"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "#f0faf4", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🌿</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 13, color: "#222" }}>{r.crop}</div>
                <div style={{ fontSize: 11, color: "#aaa" }}>{r.mandi}</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 900, fontSize: 14, color: "#222" }}>{r.price}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: r.up ? "#e53e3e" : G }}>{r.up ? "▲" : "▼"} {r.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Store Compare */}
      <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e8f5e9", boxShadow: "0 2px 12px #0006", overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #f0f0f0", background: "linear-gradient(90deg, #e8f5fd, #f0faf4)" }}>
          <span style={{ fontWeight: 900, fontSize: 15, color: "#1a2e1a" }}>🏪 Top Agri Stores</span>
        </div>
        <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          {stores.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", borderRadius: 14, border: "1.5px solid transparent", cursor: "pointer", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#f0faf4"; e.currentTarget.style.borderColor = G + "33"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "transparent"; }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg,#e6f7ef,#e0f0fd)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 13, color: "#222" }}>{s.name}</div>
                <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
                  <span style={{ color: "#f59e0b" }}>★</span> {s.rating} &nbsp;•&nbsp; <span style={{ color: B }}>{s.deals} deals</span>
                </div>
              </div>
              <span style={{ color: "#ccc", fontSize: 16 }}>›</span>
            </div>
          ))}
          <button style={{ width: "100%", marginTop: 4, padding: "10px", borderRadius: 14, border: `2px dashed ${G}44`, background: "transparent", color: G, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>+ View All Stores</button>
        </div>
      </div>
    </div>
    <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}} @media(max-width:768px){.mandi-grid{grid-template-columns:1fr!important}}`}</style>
  </section>
);

export default MandiRates;