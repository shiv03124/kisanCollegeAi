// Footer.jsx

import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const G = "#008B44";
const B = "#2398DD";

const footerLinks = {
  Product: [
    "AI Irrigation",
    "Crop Planning",
    "Drip Design",
    "Water Analytics",
  ],

  Company: [
    "About Us",
    "Our Team",
    "Careers",
    "Contact",
  ],

  Resources: [
    "Help Center",
    "Farmer Guide",
    "Documentation",
    "Support",
  ],

  
};

const socialLinks = [
  {
    icon: <FaTwitter />,
  },
  {
    icon: <FaInstagram />,
  },
  {
    icon: <FaLinkedin />,
  },
  {
    icon: <FaYoutube />,
  },
];

const Footer = () => {
  return (
    <footer
      className="
        bg-[#081208]

        text-white

        pt-20
        pb-8

        px-4
        md:px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div
          className="
            grid

            md:grid-cols-2
            lg:grid-cols-5

            gap-12

            pb-16

            border-b
            border-white/10
          "
        >
          {/* BRAND */}
          <div className="lg:col-span-2">
            {/* LOGO */}
            <div
              className="
                flex
                items-center
                gap-3

                mb-6
              "
            >
              <div
                className="
                  w-14
                  h-14

                  rounded-2xl

                  flex
                  items-center
                  justify-center

                  text-2xl

                  shadow-lg
                "
                style={{
                  background: `linear-gradient(135deg, ${G}, ${B})`,
                }}
              >
                🌿
              </div>

              <div>
                <h2
                  className="
                    text-3xl

                    font-black

                    tracking-[-1px]
                  "
                >
                  IRRIGO
                </h2>

                <p
                  className="
                    text-xs

                    tracking-[4px]

                    font-semibold

                    text-green-400
                  "
                >
                  AGROTECH AI
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                text-gray-400

                leading-8

                max-w-md

                mb-8
              "
            >
              India’s smart AI-powered irrigation
              assistant helping farmers design
              better irrigation systems, save
              water, and improve productivity.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="
                    w-11
                    h-11

                    rounded-xl

                    bg-white/5

                    border
                    border-white/10

                    flex
                    items-center
                    justify-center

                    text-gray-400

                    hover:text-white
                    hover:border-green-500
                    hover:bg-green-600/20

                    transition-all
                  "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(
            ([section, links]) => (
              <div key={section}>
                <h3
                  className="
                    text-lg

                    font-bold

                    mb-6
                  "
                >
                  {section}
                </h3>

                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="
                          text-gray-400

                          hover:text-green-400

                          transition-all

                          text-sm
                        "
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* BOTTOM */}
        <div
          className="
            pt-8

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-5
          "
        >
          {/* COPYRIGHT */}
          <p
            className="
              text-sm
              text-gray-500

              text-center
              md:text-left
            "
          >
            © 2026 IRRIGO Technologies Pvt.
            Ltd. All rights reserved.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex items-center gap-3">
            <button
              className="
                px-5
                py-3

                rounded-xl

                bg-white/5

                border
                border-white/10

                text-sm
                font-semibold

                hover:bg-green-600/20
                hover:border-green-500

                transition-all
              "
            >
              🍎 App Store
            </button>

            <button
              className="
                px-5
                py-3

                rounded-xl

                bg-white/5

                border
                border-white/10

                text-sm
                font-semibold

                hover:bg-blue-600/20
                hover:border-blue-500

                transition-all
              "
            >
              🤖 Play Store
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;