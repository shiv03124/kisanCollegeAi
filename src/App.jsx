import CategoryBrowse from "./components/CategoryBrowse";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MandiRates from "./components/MandiRates";
import Navbar from "./components/Navbar";
import HotDeals from "./components/HotDeals"


export default function App() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <CategoryBrowse />
      <HotDeals />
      <MandiRates />
      <FeaturesSection />
      <Footer />
    </div>
  );
}