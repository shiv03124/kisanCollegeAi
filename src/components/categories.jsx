const B = "#2398DD";
const G = "#008B44";

const categories = [
  { name: "Grains", icon: "🌾", count: "1,240+" },
  { name: "Vegetables", icon: "🥦", count: "980+" },
  { name: "Fruits", icon: "🍎", count: "760+" },
  { name: "Spices", icon: "🌶️", count: "520+" },
  { name: "Dairy & Eggs", icon: "🥛", count: "340+" },
  { name: "Seeds", icon: "🌱", count: "890+" },
  { name: "Fertilizers", icon: "🧪", count: "430+" },
  { name: "Farm Tools", icon: "🔧", count: "670+" },
];

const CategoryBrowse = () => (
  <section style={{ background: "#f5faf7", padding: "40px 20px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <h2 style={{ fontWeight: 900, fontSize: 22, color: "#1a2e1a", margin: 0 }}>🌿 Browse by <span style={{ color: B }}>Category</span></h2>
        <a href="#" style={{ color: G, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>All Categories →</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 20 }} className="cat-grid">
        {categories.map(c => (
          <div key={c.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.querySelector(".cat-icon").style.borderColor = G}
            onMouseLeave={e => e.currentTarget.querySelector(".cat-icon").style.borderColor = "transparent"}>
            <div className="cat-icon" style={{ width: 64, height: 64, background: "linear-gradient(135deg, #e6f7ef, #e0f0fd)", border: "2px solid transparent", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, transition: "all .2s" }}>{c.icon}</div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#2d4a2d" }}>{c.name}</div>
              <div style={{ fontSize: 10, color: "#999", marginTop: 2 }}>{c.count} products</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>{`@media(max-width:640px){.cat-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
  </section>
);

export default CategoryBrowse;