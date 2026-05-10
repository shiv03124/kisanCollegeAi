import { useState } from "react";

const SYSTEM_PROMPT = `# IRRIGO AI — System Prompt v5.1 (FINAL)
You are IRRIGO AI — India's first specialized Irrigation Design Intelligence.
You are an expert irrigation engineer, agronomist, and government scheme advisor. You have deep knowledge of Indian farming, Maharashtra field conditions, IS codes, NABARD guidelines, Jain Irrigation data, and Netafim design standards.

## HOW YOU BEHAVE
- Talk step-by-step like a human expert sitting with the farmer
- Reply in same language as user (English / Hindi / Marathi)
- Short sentences, friendly tone, farmer-friendly words
- Ask only 1–2 questions per message
- NEVER calculate without farmer confirmation

## TECHNICAL ENGINE RULES (abbreviated for demo)
INTERCROP: Lateral spacing = Main crop row spacing ÷ (intercrop rows + 1)
WATER REQ (Jain field data): Pomegranate 25-35 L/plant/day, 4 drippers × 4 LPH. Banana 40-50 L/plant/day, 2 drippers × 4 LPH. Grape 4-8 L/plant/day, 2 drippers × 4 LPH.
DRIPPER RULES: PC drippers mandatory for orchards, perennial crops, slope >2%. Thick-wall dripperline for 10+ year crops.
FILTRATION: Open well → Disc only. Borewell → Sand+Disc. Canal → Hydrocyclone+Sand+Disc. Two-stage always mandatory.
PIPE: PVC Class 4 for surface. Main ≥ Submain ≥ Lateral. V=1.5m/s.
TDH: Static lift + drawdown (5m borewell) + filter loss (7m sand+disc) + friction + emitter pressure (15m PC) + elevation + misc.
SUBSIDY: PMKSY 80-90% subsidy available. mahadbt.maharashtra.gov.in
OUTPUT: First give simple farmer summary. Then full engineering on request.`;

const SCENARIOS = [
  {
    id: 1,
    emoji: "🌱",
    title: "Hindi Farmer",
    subtitle: "Pomegranate + Intercrop · Satara · Borewell",
    tag: "Intercrop Design",
    tagColor: "#e8f5e9",
    tagText: "#2e7d32",
    color: "#1b5e20",
    accent: "#4caf50",
    conversation: [
      { role: "user", content: "Namaste bhai, mera 2 acre ka daadim (pomegranate) ka baag hai. Borewell hai 300 feet. Satara district Atpadi taluka. Black soil hai." },
      { role: "assistant", content: "Namaste 🙏 Bahut accha! Ek baat puchna tha — koi intercrop bhi hai kya daadim ke saath? Jaise pyaaz ya koi aur?" },
      { role: "user", content: "Haan bhai, ek row daadim ek row pyaaz hai beech mein." },
      { role: "assistant", content: "Bilkul! Toh intercrop hai pyaaz. Zameen kitni hai? 2 acre hi hai na?" },
      { role: "user", content: "2 acre hi hai. Design karo pura." },
    ],
    finalUserMsg: "2 acre hi hai. Design karo pura."
  },
  {
    id: 2,
    emoji: "🍌",
    title: "Marathi Farmer",
    subtitle: "Banana · Jalgaon · Open Well",
    tag: "Single Crop",
    tagColor: "#fff8e1",
    tagText: "#f57f17",
    color: "#e65100",
    accent: "#ff9800",
    conversation: [
      { role: "user", content: "Mala drip irrigation laya ahe. Maze 1.5 acre kela ahe. Vihar ahe paanyasathi. Jalgaon jilha." },
      { role: "assistant", content: "Namaste 🙏 Mala help karto. Tumchi mati konti ahe — lal, kali ki valu?" },
      { role: "user", content: "Lal mati ahe." },
      { role: "assistant", content: "Thik ahe! Kela sobat kahi aantarpik pik ahe ka? Jase haldi, aale?" },
      { role: "user", content: "Nahi, fakt kela. Design kara please." },
    ],
    finalUserMsg: "Nahi, fakt kela. Design kara please."
  },
  {
    id: 3,
    emoji: "🍇",
    title: "English Consultant",
    subtitle: "Grape Vineyard · Nashik · Sloped Land",
    tag: "Slope + PC Drippers",
    tagColor: "#ede7f6",
    tagText: "#4527a0",
    color: "#311b92",
    accent: "#7c4dff",
    conversation: [
      { role: "user", content: "Hi, I need a drip irrigation design for a grape vineyard. 3 acres, Nashik district, sandy loam soil, borewell 250 feet. Row spacing 3m x 1.5m. No intercrop." },
      { role: "assistant", content: "Great, I have most details! Just one thing — what's the elevation difference across the vineyard? Is the land flat or does it slope?" },
      { role: "user", content: "There is a slope, roughly 4-5 meters drop from one end to the other. Give me the full design and BOQ." },
    ],
    finalUserMsg: "There is a slope, roughly 4-5 meters drop from one end to the other. Give me the full design and BOQ."
  }
];

function ScenarioCard({ scenario, onRun }) {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const run = async () => {
    setLoading(true);
    setResponse("");
    setDone(false);
    try {
      const messages = scenario.conversation.map(m => ({ role: m.role, content: m.content }));
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages
        })
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === "text")?.text || "Error getting response.";
      setResponse(text);
      setDone(true);
    } catch (e) {
      setResponse("Error: " + e.message);
      setDone(true);
    }
    setLoading(false);
  };

  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      border: `2px solid ${scenario.accent}30`,
      overflow: "hidden",
      fontFamily: "'Segoe UI', sans-serif",
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)"
    }}>
      {/* Header */}
      <div style={{
        background: scenario.color,
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: 14
      }}>
        <div style={{ fontSize: 32 }}>{scenario.emoji}</div>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>{scenario.title}</div>
          <div style={{ color: "#ffffff99", fontSize: 13, marginTop: 2 }}>{scenario.subtitle}</div>
        </div>
        <div style={{
          marginLeft: "auto",
          background: scenario.tagColor,
          color: scenario.tagText,
          fontSize: 11,
          fontWeight: 700,
          padding: "4px 10px",
          borderRadius: 20,
          letterSpacing: 0.3
        }}>{scenario.tag}</div>
      </div>

      {/* Conversation preview */}
      <div style={{ padding: "16px 24px 0", maxHeight: 220, overflowY: "auto" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#999", letterSpacing: 1, marginBottom: 10 }}>CONVERSATION CONTEXT</div>
        {scenario.conversation.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
            marginBottom: 8
          }}>
            <div style={{
              maxWidth: "80%",
              background: msg.role === "user" ? scenario.color : "#f5f5f5",
              color: msg.role === "user" ? "#fff" : "#333",
              borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
              padding: "8px 13px",
              fontSize: 13,
              lineHeight: 1.5
            }}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Run button */}
      <div style={{ padding: "16px 24px" }}>
        <button
          onClick={run}
          disabled={loading}
          style={{
            width: "100%",
            background: loading ? "#ccc" : scenario.color,
            color: "#fff",
            border: "none",
            borderRadius: 10,
            padding: "13px 0",
            fontWeight: 700,
            fontSize: 14,
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            transition: "opacity 0.2s"
          }}
        >
          {loading ? (
            <>
              <span style={{
                width: 16, height: 16, border: "2px solid #ffffff60",
                borderTop: "2px solid #fff", borderRadius: "50%",
                display: "inline-block",
                animation: "spin 0.8s linear infinite"
              }} />
              IRRIGO AI is thinking...
            </>
          ) : done ? "▶ Run Again" : "▶ Run This Scenario"}
        </button>
      </div>

      {/* Response */}
      {(response || loading) && (
        <div style={{
          margin: "0 24px 24px",
          background: "#f8fffe",
          border: `1.5px solid ${scenario.accent}40`,
          borderRadius: 12,
          padding: "16px 18px"
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 12, borderBottom: "1px solid #eee", paddingBottom: 10
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: scenario.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 13, fontWeight: 700
            }}>I</div>
            <span style={{ fontWeight: 700, color: scenario.color, fontSize: 13 }}>IRRIGO AI Response</span>
          </div>
          {loading && !response ? (
            <div style={{ color: "#999", fontSize: 13 }}>Generating response...</div>
          ) : (
            <div style={{
              fontSize: 14, lineHeight: 1.75, color: "#333",
              whiteSpace: "pre-wrap"
            }}>{response}</div>
          )}
        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function Temp() {
  const [allRunning, setAllRunning] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e8f5e9 0%, #f3e5f5 50%, #e3f2fd 100%)",
      padding: "32px 20px",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "#fff", borderRadius: 50, padding: "8px 20px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)", marginBottom: 16
        }}>
          <span style={{ fontSize: 20 }}>💧</span>
          <span style={{ fontWeight: 800, fontSize: 15, color: "#1b5e20", letterSpacing: 1 }}>IRRIGO AI v5.1</span>
          <span style={{
            background: "#e8f5e9", color: "#2e7d32", fontSize: 10,
            fontWeight: 700, padding: "2px 8px", borderRadius: 10
          }}>LIVE DEMO</span>
        </div>
        <h1 style={{
          fontSize: 28, fontWeight: 900, color: "#1a1a2e",
          margin: "0 0 10px", letterSpacing: -0.5
        }}>3 Farmer Scenario Demo</h1>
        <p style={{ color: "#666", fontSize: 15, margin: 0, maxWidth: 560, marginInline: "auto" }}>
          Real IRRIGO AI responses — each scenario tests a different design challenge. Click Run to see live output.
        </p>
      </div>

      {/* Scenario cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: 24,
        maxWidth: 1200,
        margin: "0 auto"
      }}>
        {SCENARIOS.map(s => (
          <ScenarioCard key={s.id} scenario={s} />
        ))}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 36, color: "#999", fontSize: 12 }}>
        Powered by IRRIGO AI v5.1 · NABARD + Jain Irrigation + Netafim Handbook · Maharashtra Field-Verified
      </div>
    </div>
  );
}
