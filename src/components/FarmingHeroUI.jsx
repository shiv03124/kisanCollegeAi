import React from "react";

const FarmingHeroUI = () => {
  return (
    <section
    id="home"
      className="
        w-full
       py-8
        

        bg-[#eef4ef]

        flex
        items-center
        justify-center

        px-4
        md:px-8

        
      "
    >
      <div
        className="
          max-w-6xl
          w-full

          grid
          lg:grid-cols-2

          gap-10
          items-center
        "
      >
        {/* LEFT CONTENT */}
        <div>
          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-2

              bg-[#dff3e5]

              text-[#008B44]

              px-4
              py-2

              rounded-full

              text-sm
              font-semibold

              mb-6
            "
          >
            🌾 AI Powered Farming Intelligence
          </div>

          {/* HEADING */}
          <h1
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl

              font-black

              leading-tight

              text-[#071133]

              mb-6
            "
          >
            Smart Farming with{" "}
            <span className="text-[#00A63E]">
              Irrigo AI
            </span>
          </h1>

          {/* SUBTITLE */}
          <p
            className="
              text-gray-600

              text-base
              md:text-lg

              leading-8

              max-w-xl

              mb-8
            "
          >
            Irrigo AI helps farmers with irrigation
            planning, water
            management, government schemes, and
            agriculture insights in simple language.
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-wrap

              gap-4

              mb-10
            "
          >
            <button
              className="
                px-7
                py-4

                rounded-2xl

                bg-[#00A63E]

                text-white
                font-bold

                shadow-lg

                hover:scale-105

                transition-all
              "
            >
              Try Irrigo AI
            </button>

           
          </div>

          {/* STATS */}
          <div
            className="
              grid
              grid-cols-3

              gap-4

              max-w-2xl
            "
          >
            {[
              {
                title: "24/7",
                sub: "Farmer Assistance",
              },
              
              {
                title: "Multi",
                sub: "Language Support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-white

                  rounded-2xl

                  border
                  border-gray-200

                  p-5

                  shadow-sm
                "
              >
                <h3
                  className="
                    text-3xl

                    font-black

                    text-[#008B44]

                    mb-1
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-sm

                    text-gray-500
                  "
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CHAT UI */}
        <div
          className="
            w-full

            max-w-[500px]

            mx-auto
          "
        >
          <div
            className="
              bg-white

              rounded-[28px]

              overflow-hidden

              shadow-2xl

              border
              border-gray-200
            "
          >
            {/* TOP BAR */}
            <div
              className="
                bg-[#00A63E]

                px-6
                py-4

                flex
                items-center
                justify-between
              "
            >
              <div>
                <h3
                  className="
                    text-white

                    font-bold

                    text-lg
                  "
                >
                  Irrigo AI Assistant
                </h3>

                <p
                  className="
                    text-green-100

                    text-sm
                  "
                >
                  Online • Ready to help
                </p>
              </div>

              <div
                className="
                  w-3
                  h-3

                  rounded-full

                  bg-green-300
                "
              />
            </div>

            {/* CHAT BODY */}
            <div
              className="
                bg-[#edf3ee]

                p-5

                h-[380px]
              "
            >
              {/* USER MSG */}
              <div className="flex justify-end mb-5">
                <div
                  className="
                    bg-[#00A63E]

                    text-white

                    rounded-[20px]
                    rounded-tr-sm

                    px-5
                    py-4

                    text-[15px]

                    max-w-[280px]

                    shadow-md
                  "
                >
                  Sugarcane drip irrigation design
                  for 250ft x 100ft field
                </div>
              </div>

              {/* AI MSG */}
              <div className="flex justify-start">
                <div
                  className="
                    bg-white

                    rounded-[20px]
                    rounded-tl-sm

                    px-5
                    py-5

                    border
                    border-gray-200

                    max-w-[320px]

                    shadow-sm
                  "
                >
                  <h4
                    className="
                      font-bold

                      text-[#008B44]

                      text-lg

                      mb-3
                    "
                  >
                    Irrigo AI Analysis 🌾
                  </h4>

                  <ul
                    className="
                      text-gray-700

                      text-[15px]

                      leading-8

                      space-y-1
                    "
                  >
                    <li>
                      • Total Area: 0.23 Hectare
                    </li>

                    <li>
                      • Recommended Drip Layout:
                      4.5 ft row spacing
                    </li>

                    <li>
                      • Estimated Water Need:
                      18,000–22,000 L/day
                    </li>

                    
                  </ul>
                </div>
              </div>
            </div>

            {/* INPUT */}
            <div
              className="
                bg-white

                border-t
                border-gray-100

                p-4
              "
            >
              <div
                className="
                  flex
                  items-center

                  gap-3
                "
              >
                <input
                  type="text"
                  placeholder="Ask about crops, irrigation, fertilizer..."
                  className="
                    flex-1

                    h-12

                    rounded-xl

                    border
                    border-gray-300

                    px-4

                    outline-none

                    focus:border-[#00A63E]
                  "
                />

                <button
                  className="
                    px-6

                    h-12

                    rounded-xl

                    bg-[#00A63E]

                    text-white
                    font-bold

                    hover:bg-[#008B44]

                    transition-all
                  "
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmingHeroUI;