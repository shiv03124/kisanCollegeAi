import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FarmingHeroUI from "./components/FarmingHeroUI";

function App() {
  const [language, setLanguage] = useState("english");

  return (
    <main className="app-bg relative overflow-hidden">

      {/* GLOBAL BACKGROUND GLOWS */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#00A63E]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="absolute bottom-[-140px] right-[-140px] w-[480px] h-[480px] bg-[#1b5e20]/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[320px] h-[320px] bg-[#7CFFB2]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10">

        <Navbar
          language={language}
          setLanguage={setLanguage}
        />

        <FarmingHeroUI />

        <HeroSection language={language} />

        <Footer />

      </div>
    </main>
  );
}

export default App;