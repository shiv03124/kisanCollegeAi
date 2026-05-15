const FarmingHeroUI = () => {
  return (
    <section
      id="home"
      className="
        w-full
        min-h-screen

        flex items-center justify-center

        px-6

        relative
        overflow-hidden

        pt-[110px]
        pb-20
      "
    >

      {/* CONTENT */}
      <div
        className="
          max-w-6xl
          w-full

          text-center

          relative z-10
        "
      >

        {/* TAGLINE */}
        <p
          className="
            text-[#00A63E]

            text-xs md:text-sm

            font-bold

            uppercase

            tracking-[0.3em]

            mb-5
          "
        >
          Design Smart · Irrigate Right · Grow Better
        </p>

        {/* HEADING */}
        <h1
          className="
            text-5xl
            md:text-7xl

            font-black

            leading-[1.02]

            text-[#0d2610]

            mb-8
          "
        >
          The Future of
          <span
            className="
              block

              text-[#00A63E]

              italic
            "
          >
            Smart Irrigation
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
          className="
            text-gray-600

            text-base
            md:text-xl

            leading-8

            mb-4

            max-w-3xl
            mx-auto
          "
        >
          India's First AI-Powered Irrigation Designer —
          helping farmers build efficient, sustainable and
          precision-driven irrigation systems using intelligent
          engineering and real field insights.
        </p>

        {/* CTA BUTTONS */}
        <div
          className="
            flex
            flex-col
            sm:flex-row

            gap-4

            justify-center

            mb-7
          "
        >

          {/* PRIMARY BUTTON */}
          <button
           onClick={() => {
    const section =
      document.getElementById("chat");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  }}
            className="
              px-8 py-4

              rounded-2xl

              bg-[#1b5e20]
              text-white

              font-bold

              shadow-[0_10px_30px_rgba(27,94,32,0.25)]

              hover:scale-105
              hover:shadow-[0_15px_40px_rgba(27,94,32,0.35)]

              transition-all duration-300
            "
          >
            Try Irrigo AI
          </button>

          {/* SECONDARY BUTTON */}
          <button
           onClick={() => {
    const section =
      document.getElementById("chat");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  }}
            className=" 
              px-8 py-4

              rounded-2xl

              border border-[#1b5e20]/20

              bg-white/70
              backdrop-blur-xl

              text-[#1b5e20]

              font-bold

              hover:bg-[#1b5e20]
              hover:text-white

              transition-all duration-300
            "
          >
            See How It Works
          </button>
        </div>

        {/* FEATURE CARDS */}
        <div
          className="
            flex
            flex-wrap

            justify-center

            gap-5
          "
        >

          {[
            {
              icon: "🌱",
              title: "Right Design",
              desc: "Precision layouts",
            },

            {
              icon: "💧",
              title: "Less Waste",
              desc: "Smart water usage",
            },

            {
              icon: "📈",
              title: "Better Yield",
              desc: "Higher productivity",
            },

            {
              icon: "♻️",
              title: "Sustainable",
              desc: "Future-ready farming",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                group

                relative

                w-[240px]

                p-6

                rounded-3xl

                bg-white/60
                backdrop-blur-xl

                border border-white/40

                shadow-[0_10px_40px_rgba(0,0,0,0.06)]

                hover:-translate-y-2
                hover:shadow-[0_20px_50px_rgba(0,166,62,0.18)]

                transition-all duration-300
              "
            >

              {/* HOVER GLOW */}
              <div
                className="
                  absolute inset-0

                  rounded-3xl

                  bg-gradient-to-br
                  from-[#00A63E]/10
                  to-transparent

                  opacity-0
                  group-hover:opacity-100

                  transition
                "
              />

              {/* ICON */}
              <div
                className="
                  w-14 h-14

                  mx-auto mb-4

                  rounded-2xl

                  flex items-center justify-center

                  bg-[#e9f9ee]

                  text-3xl

                  relative z-10
                "
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[#0d2610]

                  font-bold

                  text-lg

                  mb-2

                  relative z-10
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  text-gray-500

                  text-sm

                  leading-6

                  relative z-10
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FarmingHeroUI;