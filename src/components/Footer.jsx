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
    {
      name: "AI Irrigation",
      href: "#chat",
    },
    {
      name: "Crop Planning",
      href: "#chat",
    },
    {
      name: "Drip Design",
      href: "#chat",
    },
    {
      name: "Water Analytics",
      href: "#chat",
    },
  ],

  Company: [
    {
      name: "About Us",
      href: "#whyus",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ],
};

const socialLinks = [
  {
    icon: <FaTwitter />,
    href: "https://twitter.com",
  },
  {
    icon: <FaInstagram />,
    href: "https://instagram.com",
  },
  {
    icon: <FaLinkedin />,
    href: "https://linkedin.com",
  },
  {
    icon: <FaYoutube />,
    href: "https://youtube.com",
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="
        bg-[#081208]
        text-white

        pt-16
        pb-8

        px-4
        md:px-6

        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-10

            pb-12

            border-b
            border-white/10
          "
        >
          {/* BRAND */}
          <div className="lg:col-span-2">
            {/* LOGO */}
            <a
              href="#home"
              className="
                flex
                items-center
                gap-3

                mb-6

                w-fit
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
            </a>

            {/* DESCRIPTION */}
            <p
              className="
                text-gray-400

                leading-7

                text-sm
                md:text-base

                max-w-md

                mb-7
              "
            >
              India’s smart AI-powered irrigation
              assistant helping farmers design
              better irrigation systems, save
              water, and improve productivity.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-10
                    h-10

                    rounded-xl

                    bg-white/5

                    border
                    border-white/10

                    flex
                    items-center
                    justify-center

                    text-gray-400

                    hover:text-white
                    hover:bg-green-600/20
                    hover:border-green-500

                    transition-all
                    duration-300
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

                    mb-5
                  "
                >
                  {section}
                </h3>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="
                          text-sm
                          text-gray-400

                          hover:text-green-400

                          transition-all
                          duration-300

                          inline-block
                        "
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}

          {/* QUICK NAVIGATION */}
          {/* <div>
            <h3
              className="
                text-lg
                font-bold

                mb-5
              "
            >
              Navigation
            </h3>

            <ul className="space-y-3">
              {[
                {
                  label: "Home",
                  href: "#home",
                },
                {
                  label: "Why Us",
                  href: "#whyus",
                },
                {
                  label: "Features",
                  href: "#features",
                },
                {
                  label: "Contact",
                  href: "#contact",
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      text-sm
                      text-gray-400

                      hover:text-green-400

                      transition-all
                      duration-300
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* BOTTOM */}
        <div
          className="
            pt-7

            flex
            flex-col
            lg:flex-row

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
              lg:text-left
            "
          >
            © 2026 IRRIGO Technologies Pvt.
            Ltd. All rights reserved.
          </p>

          {/* STORE BUTTONS */}
          <div
            className="
              flex
              flex-wrap

              items-center
              justify-center

              gap-3
            "
          >
           
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;