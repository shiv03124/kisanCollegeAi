import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaMicrophone,
  FaCommentDots,
} from "react-icons/fa";
import image from "../assets/images/image2.jpeg"

const G = "#008B44";
const B = "#2398DD";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      {/* Professional Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <nav
        style={{
          background: "#fff",
          boxShadow: "0 2px 14px rgba(0,0,0,0.06)",
          position: "sticky",
          top: 0,
          zIndex: 100,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 1350,
            margin: "0 auto",
            padding: "0 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 74,
          }}
        >
          {/* LEFT SECTION */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            {/* LOGO */}
            <img
              src={image} // Replace with your actual logo path
              alt="Irrigo Agrotech"
              style={{
                height: 54,
                width: "auto",
                objectFit: "contain",
              }}
            />

            {/* BRAND NAME */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#111",
                  letterSpacing: "-1px",
                }}
              >
                IRRIGO
              </span>

              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "4px",
                  color: G,
                  marginTop: 3,
                }}
              >
                AGROTECH
              </span>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            {/* FEEDBACK BUTTON */}
            <button
              style={{
                border: "1px solid #E4E4E7",
                background: "#fff",
                color: "#333",
                borderRadius: 12,
                padding: "10px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: ".2s",
              }}
            >
              <FaCommentDots />
              Feedback
            </button>

            {/* VOICE BUTTON */}
            <button
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "none",
                background: "#EEF7FF",
                color: B,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 17,
              }}
            >
              <FaMicrophone />
            </button>

            {/* AUTH SECTION */}
            {!isLoggedIn ? (
              <button
                style={{
                  background: `linear-gradient(135deg, ${G}, ${B})`,
                  color: "#fff",
                  border: "none",
                  borderRadius: 14,
                  padding: "11px 24px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                }}
              >
                Login
              </button>
            ) : (
              <button
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#333",
                  fontSize: 34,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaUserCircle />
              </button>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="mob-burger"
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                fontSize: 24,
                cursor: "pointer",
                color: "#222",
              }}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div
            style={{
              background: "#fff",
              borderTop: "1px solid #eee",
              padding: "16px 24px",
            }}
          >
            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: 10,
                border: "1px solid #ddd",
                background: "#fff",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              Feedback
            </button>

            {!isLoggedIn && (
              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: `linear-gradient(135deg, ${G}, ${B})`,
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                Login
              </button>
            )}
          </div>
        )}

        {/* RESPONSIVE */}
        <style>{`
          @media(max-width: 768px){
            .mob-burger{
              display:flex !important;
            }
          }

          @media(max-width: 640px){
            nav img{
              height:44px !important;
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;