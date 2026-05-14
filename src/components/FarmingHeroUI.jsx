const FarmingHeroUI = () => {
  return (
    <section
      id="home"
      className="
        w-full
        min-h-screen
        flex items-start justify-center
        px-6
        relative
        overflow-hidden
        my-20

        bg-gradient-to-br
        from-[#e9f9ee]
        via-white
        to-[#d8f5dd]
      "
    >
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#00A63E]/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[480px] h-[480px] bg-[#1b5e20]/20 blur-[150px] rounded-full" />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[320px] h-[320px] bg-[#7CFFB2]/10 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="max-w-4xl w-full text-center relative z-10 pt-[72px]">

        {/* TAGLINE */}
        <p className="text-[#00A63E] text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-4">
          Design Smart · Irrigate Right · Grow Better
        </p>

        {/* HEADING */}
        <h1 className="text-5xl md:text-6xl font-black leading-[1.05] text-[#0d2610] mb-6">
          The Future of Irrigation is{" "}
          <span className="block text-[#00A63E] italic">
            Intelligent
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-600 text-base md:text-lg leading-8 mb-8 max-w-2xl mx-auto">
          India's First Smart Irrigation Designer — we design efficient, precise
          and sustainable irrigation systems using data, engineering and field intelligence.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <button className="px-8 py-4 rounded-xl bg-[#1b5e20] text-white font-bold hover:scale-105 transition">
            Try Irrigo AI
          </button>
          <button className="px-8 py-4 rounded-xl border border-[#1b5e20] text-[#1b5e20] font-bold hover:bg-[#1b5e20] hover:text-white transition">
            See How It Works
          </button>
        </div>

        {/* FEATURES */}
        <div className="flex flex-wrap gap-3 justify-center">
          {["Right Design", "Less Waste", "Better Yield", "Sustainable Future"].map(
            (p) => (
              <span
                key={p}
                className="bg-[#e9f7ec] text-[#1b5e20] border border-[#b7e4c7] px-4 py-2 rounded-full text-xs font-bold"
              >
                {p}
              </span>
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default FarmingHeroUI;