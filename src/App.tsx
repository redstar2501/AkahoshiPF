import "./App.css";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/heder";
import Footer from "./components/footer";
import Home from "./pages/home";
import SkillList from "./pages/skill";
import Achievements from "./pages/achievements";
import Work from "./pages/work";
import Contact from "./pages/contact";

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 50) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="grid grid-rows-[auto_1fr_auto] grid-cols-[100%] min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<SkillList />} />
        <Route path="/work" element={<Work />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 border-white right-5 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-white hover:text-red-500 cursor-pointer flex items-center justify-center transition ease-in-out duration-300"
          style={{ width: "40px", height: "40px" }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}

export default App;
