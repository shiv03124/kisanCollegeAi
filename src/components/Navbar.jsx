// Navbar.jsx

import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaMicrophone,
  FaCommentDots,
} from "react-icons/fa";

import image from "../assets/images/image2.jpeg";

const G = "#008B44";
const B = "#2398DD";

const navLinks = [
  "Home",
  "Why Us",
  "Features",
  "Team",
  "Contact",
];

const Navbar = ({
  language,
  setLanguage,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FONT */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <nav
        className="
          w-full
          sticky
          top-0
          z-50

          bg-white/90
          backdrop-blur-md

          border-b
          border-gray-200

          shadow-sm
        "
        style={{
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div
          className="
            max-w-7xl
            mx-auto

            h-[74px]
            md:h-[80px]

            px-4
            md:px-6

            flex
            items-center
            justify-between
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-3 cursor-pointer">
            {/* LOGO */}
            <img
              src={image}
              alt="IRRIGO"
              className="
                h-11
                md:h-12
                lg:h-14
                w-auto
                object-contain
              "
            />

            {/* BRAND */}
            <div className="leading-none">
              <h1
                className="
                  text-[24px]
                  md:text-[28px]
                  font-black
                  tracking-[-1px]
                  text-black
                "
              >
                IRRIGO
              </h1>

              <p
                className="
                  text-[10px]
                  md:text-[12px]
                  font-bold
                  tracking-[3px]
                  mt-1
                "
                style={{
                  color: G,
                }}
              >
                AGROTECH
              </p>
            </div>
          </div>

          {/* CENTER NAV */}
          <div
            className="
              hidden
              lg:flex

              items-center
              gap-8
            "
          >
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="
                  text-[15px]
                  font-semibold
                  text-gray-700

                  hover:text-black
                  transition-all
                  duration-200

                  relative
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

                    bg-black

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* FEEDBACK */}
            <button
              className="
                hidden
                md:flex

                items-center
                gap-2

                border
                border-gray-200

                px-4
                py-2.5

                rounded-xl

                text-sm
                font-semibold

                hover:bg-gray-50
                transition-all
              "
            >
              <FaCommentDots />
              Feedback
            </button>

            {/* MIC */}
            <button
              className="
                w-11
                h-11

                rounded-full

                flex
                items-center
                justify-center

                text-[16px]

                transition-all
                hover:scale-105
              "
              style={{
                background: "#EEF7FF",
                color: B,
              }}
            >
              <FaMicrophone />
            </button>

            {/* CTA BUTTON */}
            {/* <button
              className="
                hidden
                md:flex

                items-center
                justify-center

                px-5
                h-11

                rounded-xl

                text-white
                font-semibold

                shadow-lg
                hover:scale-[1.03]

                transition-all
              "
              style={{
                background: `linear-gradient(135deg, ${G}, ${B})`,
              }}
            >
              Get Started
            </button> */}

            {/* LANGUAGE SELECTOR */}
<div
  className="
    hidden
    md:flex

    items-center

    bg-gray-100

    rounded-xl

    p-1
  "
>
  {["english", "hindi", "marathi"].map(
    (lang) => (
      <button
        key={lang}
        onClick={() => setLanguage(lang)}
        className={`
          px-4
          py-2

          rounded-lg

          text-sm
          font-semibold

          transition-all

          ${
            language === lang
              ? "bg-white shadow text-black"
              : "text-gray-500"
          }
        `}
      >
        {lang === "english"
          ? "EN"
          : lang === "hindi"
          ? "हिं"
          : "मर"}
      </button>
    )
  )}
</div>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(!open)}
              className="
                lg:hidden

                w-11
                h-11

                rounded-full

                flex
                items-center
                justify-center

                text-[18px]

                bg-gray-100
              "
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300

            ${open ? "max-h-[500px]" : "max-h-0"}
          `}
        >
          <div
            className="
              border-t
              border-gray-100

              px-5
              py-5

              bg-white
            "
          >
            {/* MOBILE LINKS */}
            <div className="flex flex-col gap-4 mb-5">
              {navLinks.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  className="
                    text-[15px]
                    font-semibold
                    text-gray-700

                    hover:text-black
                    transition-all
                  "
                >
                  {item}
                </a>
              ))}
            </div>

            {/* BUTTONS */}
            <button
              className="
                w-full

                h-12

                rounded-xl

                border
                border-gray-200

                font-semibold

                mb-3
              "
            >
              Feedback
            </button>

            <button
              className="
                w-full

                h-12

                rounded-xl

                text-white
                font-bold

                shadow-lg
              "
              style={{
                background: `linear-gradient(135deg, ${G}, ${B})`,
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;