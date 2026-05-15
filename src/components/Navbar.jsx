import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";

import image from "../assets/images/image5.png";

const navLinks = [
  "Home",
  "Why Us",
  
  "Contact",
];

const Navbar = ({
  language,
  setLanguage,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50

        bg-white/60
        backdrop-blur-xl

        border-b border-white/20

        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          h-[76px]

          px-4 md:px-6

          flex items-center justify-between
        "
      >

        {/* LOGO */}
        <div className="flex items-center">
          <img
            src={image}
            alt="IRRIGO"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item
                .toLowerCase()
                .replace(/\s/g, "")}`}
              className="
                relative

                text-[15px]
                font-semibold
                text-gray-700

                hover:text-[#00A63E]

                transition-all duration-300

                group
              "
            >
              {item}

              <span
                className="
                  absolute
                  left-0
                  -bottom-1

                  w-0
                  h-[2px]

                  bg-[#00A63E]

                  transition-all duration-300

                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* FEEDBACK BUTTON */}
          <button
            className="
              hidden md:flex
              items-center gap-2

              px-4 py-2

              rounded-xl

              bg-[#1b5e20]
              text-white

              text-sm font-semibold

              hover:scale-105
              transition
            "
          >
            <FaCommentDots />
            Feedback
          </button>

          {/* LANGUAGE */}
          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            className="
              hidden md:block

              h-10
              px-4

              rounded-xl

              border border-gray-200

              bg-white/80

              text-sm font-semibold
              text-gray-700

              outline-none

              focus:ring-2
              focus:ring-[#00A63E]/30
            "
          >
            <option value="english">
              English
            </option>

            <option value="hindi">
              हिन्दी
            </option>

            <option value="marathi">
              मराठी
            </option>
          </select>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              lg:hidden

              w-10 h-10

              flex items-center justify-center

              rounded-full

              bg-white
              shadow-md

              text-[#1b5e20]

              transition
            "
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            lg:hidden

            px-6 py-5

            bg-white/90
            backdrop-blur-xl

            border-t border-gray-100
          "
        >
          <div className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item
                  .toLowerCase()
                  .replace(/\s/g, "")}`}
                className="
                  text-gray-700
                  font-semibold

                  hover:text-[#00A63E]

                  transition
                "
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* MOBILE LANGUAGE */}
            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value)
              }
              className="
                h-11
                px-4

                rounded-xl

                border border-gray-200

                text-sm font-semibold
              "
            >
              <option value="english">
                English
              </option>

              <option value="hindi">
                हिन्दी
              </option>

              <option value="marathi">
                मराठी
              </option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;