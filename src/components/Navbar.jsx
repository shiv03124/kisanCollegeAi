import { useState } from "react";
import { FaBars, FaTimes, FaMicrophone, FaCommentDots } from "react-icons/fa";
import image from "../assets/images/image5.png";

const G = "#008B44";
const B = "#2398DD";

const navLinks = ["Home", "Why Us", "Features", "Contact"];

const Navbar = ({ language, setLanguage }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/80 backdrop-blur-md
        border-b border-gray-200
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          h-[72px]
          px-4 md:px-6
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <div className="flex items-center">
          <img src={image} alt="IRRIGO" className="h-10 md:h-11 w-auto" />
        </div>

        {/* CENTER NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className="
                text-[15px] font-semibold text-gray-700
                hover:text-black transition relative group
              "
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all" />
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50">
            <FaCommentDots />
            Feedback
          </button>

          {/* <button
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "#EEF7FF", color: B }}
          >
            <FaMicrophone />
          </button> */}

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="hidden md:block h-10 px-3 rounded-xl border text-sm font-semibold"
          >
            <option value="english">English</option>
            <option value="hindi">हिन्दी</option>
            <option value="marathi">मराठी</option>
          </select>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE */}
      {open && (
        <div className="lg:hidden border-t bg-white px-5 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-gray-700 font-semibold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;