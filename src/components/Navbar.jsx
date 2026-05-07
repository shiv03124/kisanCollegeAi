import { useState } from "react";

const G = "#008B44";
const B = "#2398DD";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Hot Deals" },
    { label: "Crop Lens" },
    { label: "Price Alert" },
   
    { label: "Mandi Rates" },
    
    { label: "More ▾" },
  ];

  return (
    <nav style={{ background: "#fff", boxShadow: "0 2px 12px #0001", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: `linear-gradient(135deg, ${G}, ${B})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🌾</div>
          <span style={{ fontWeight: 900, fontSize: 22, letterSpacing: -0.5, color: G, fontFamily: "Georgia, serif" }}>agri<span style={{ color: B }}>hatke</span></span>
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desk-nav">
          {links.map(l => (
            <a key={l.label} href="#" style={{ position: "relative", padding: "6px 12px", fontSize: 13.5, fontWeight: 600, color: "#444", textDecoration: "none", borderRadius: 8, transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = G; e.currentTarget.style.background = "#f0faf4"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#444"; e.currentTarget.style.background = "transparent"; }}>
              {l.label}
              {l.badge && (
                <span style={{ position: "absolute", top: -4, right: -2, fontSize: 9, fontWeight: 800, padding: "2px 5px", borderRadius: 20, background: l.badge === "NEW" ? B : G, color: "#fff" }}>{l.badge}</span>
              )}
            </a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button style={{ border: `1.5px solid ${B}`, color: B, background: "transparent", borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            🌿 Install Free
          </button>
          <button style={{ background: G, color: "#fff", border: "none", borderRadius: 20, padding: "8px 22px", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>Login</button>
          <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", fontSize: 22, cursor: "pointer" }} className="mob-burger">☰</button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid #eee", padding: "10px 20px 16px" }}>
          {links.map(l => <a key={l.label} href="#" style={{ display: "block", padding: "8px 0", fontSize: 14, color: "#444", textDecoration: "none", fontWeight: 600 }}>{l.label}</a>)}
        </div>
      )}

      <style>{`
        @media(max-width:768px){ .desk-nav{display:none!important} .mob-burger{display:flex!important} }
      `}</style>
    </nav>
  );
};

export default Navbar;