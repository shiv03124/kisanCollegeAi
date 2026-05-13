import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import FarmingHeroUI from "./components/FarmingHeroUI";

function App() {
  const [language, setLanguage] =
    useState("english");

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />
      <FarmingHeroUI />

      <HeroSection language={language} />

      <Footer />
    </>
  );
}

export default App;