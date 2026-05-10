import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Temp from "./components/temp/Shiva";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

 function App() {
  return (
   
<>
<Navbar />
<Home />
</>
  );
}

export default App;