import { useState } from "react";

const G = "#008B44";
const B = "#2398DD";

const deals = [
  { name: "Basmati Rice", cat: "Grains", orig: "₹4,200", curr: "₹3,650", disc: "13%", store: "AgriMart", icon: "🌾" },
  { name: "Alphonso Mango", cat: "Fruits", orig: "₹800", curr: "₹620", disc: "22%", store: "Mandi Direct", icon: "🥭" },
  { name: "Organic Wheat", cat: "Grains", orig: "₹2,800", curr: "₹2,450", disc: "12%", store: "KisanStore", icon: "🌾" },
  { name: "Fresh Tomatoes", cat: "Vegetables", orig: "₹60", curr: "₹38", disc: "36%", store: "FarmFresh", icon: "🍅" },
  { name: "Turmeric", cat: "Spices", orig: "₹320", curr: "₹260", disc: "18%", store: "SpiceZone", icon: "🌿" },
  { name: "Jaggery", cat: "Sweeteners", orig: "₹180", curr: "₹145", disc: "19%", store: "NaturaFarm", icon: "🍬" },
];

const DealCard = ({ d }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", borderRadius: 18, border: `1.5px solid ${hov ? G+"44" : "#eee"}`, boxShadow: hov ? `0 8px 32px ${G}18` : "0 1px 6px #0008", transition: "all .25s", overflow: "hidden", display: "flex", flexDirection: "column", transform: hov ? "translateY(-3px)" : "none" }}>
      <div style={{ background: "linear-gradient(135deg, #e6f7ef, #e0f0fd)", display: "flex", alignItems: "center", justifyContent: "center", padding: "28px 10px", fontSize: 56, position: "relative" }}>
        {d.icon}
        <span style={{ position: "absolute", top: 8, right: 8, background: "#e53e3e", color: "#fff", fontSize: 10, fontWeight: 800, padding: "2px 7px", borderRadius: 20 }}>-{d.disc}</span>
      </div>
      <div style={{ padding: "14px 14px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 10, color: B, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 }}>{d.cat}</span>
        <p style={{ fontWeight: 800, fontSize: 13, color: hov ? G : "#222", margin: "0 0 8px", lineHeight: 1.3, transition: "color .2s" }}>{d.name}</p>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
          <span style={{ color: G, fontWeight: 900, fontSize: 18 }}>{d.curr}</span>
          <span style={{ color: "#bbb", fontSize: 12, textDecoration: "line-through" }}>{d.orig}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 10, borderTop: "1px solid #f0f0f0" }}>
          <span style={{ fontSize: 11, color: "#888" }}>🏪 {d.store}</span>
          <button style={{ background: G, color: "#fff", border: "none", borderRadius: 20, padding: "5px 12px", fontSize: 11, fontWeight: 800, cursor: "pointer" }}>View Deal</button>
        </div>
      </div>
    </div>
  );
};

const HotDeals = () => (
  <section style={{ padding: "48px 20px", maxWidth: 1200, margin: "0 auto" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
      <div>
        <h2 style={{ fontWeight: 900, fontSize: 22, color: "#1a2e1a", margin: "0 0 4px" }}>🔥 Hot <span style={{ color: G }}>Farm Deals</span></h2>
        <p style={{ fontSize: 13, color: "#888", margin: 0 }}>Best prices tracked live across mandis & agri-stores</p>
      </div>
      <a href="#" style={{ color: B, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>View All →</a>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 16 }} className="deals-grid">
      {deals.map((d, i) => <DealCard key={i} d={d} />)}
    </div>
    <style>{`@media(max-width:900px){.deals-grid{grid-template-columns:repeat(3,1fr)!important}} @media(max-width:540px){.deals-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
  </section>
);

export default HotDeals;