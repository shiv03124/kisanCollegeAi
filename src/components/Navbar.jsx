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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <nav
        className="
          w-full
          bg-white
          border-b
          border-gray-200
          sticky
          top-0
          z-50
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

            h-[72px]
            md:h-[78px]
            lg:h-[82px]

            px-4
            md:px-6

            flex
            items-center
            justify-between
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-3">
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
              "
              style={{
                background: "#EEF7FF",
                color: B,
              }}
            >
              <FaMicrophone />
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden

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

        {/* MOBILE DROPDOWN */}
        {open && (
          <div
            className="
              md:hidden

              border-t
              border-gray-100

              px-4
              py-4

              bg-white
            "
          >
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
              "
              style={{
                background: `linear-gradient(135deg, ${G}, ${B})`,
              }}
            >
              Login
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;