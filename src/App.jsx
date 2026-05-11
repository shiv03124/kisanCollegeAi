import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] =
    useState("english");

  return (
    <>
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      <HeroSection language={language} />

      <Footer />
    </>
  );
}

export default App;