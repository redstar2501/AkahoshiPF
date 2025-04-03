// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/heder";
import Footer from "./components/footer";
import Home from "./pages/home";
import SkillList from "./pages/skill";
import Work from "./pages/work";
import Contact from "./pages/contact";
function App() {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] grid-cols-[100%] min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<SkillList />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
