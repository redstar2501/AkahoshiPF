import { Link, useLocation } from "react-router-dom";
import Heroicon from "../assets/images/cow.svg";
import React, { useState, useEffect, useRef } from "react";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    document.body.style.paddingTop = `${headerHeight}px`;
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="flex justify-between items-center p-4 bg-red-400 text-white fixed top-0 left-0 w-full z-50"
    >
      {/* ロゴ部分 */}
      <Link
        to="/"
        style={{ color: "white" }}
        className="flex items-center gap-4"
      >
        <img src={Heroicon} className="h-12 w-auto" alt="Hero icon" />
        <h3 className="text-2xl font-bold ">AM Portfolio</h3>
      </Link>

      {/* ナビゲーションメニュー */}
      <nav className="text-white p-2 hidden sm:block md:block">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: location.pathname === "/" ? "red" : "white",
            backgroundColor:
              location.pathname === "/" ? "white" : "transparent",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          Home
        </Link>{" "}
        |{" "}
        <Link
          to="/skill"
          style={{
            textDecoration: "none",
            color: location.pathname === "/skill" ? "red" : "white",
            backgroundColor:
              location.pathname === "/skill" ? "white" : "transparent",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          Skill
        </Link>{" "}
        |{" "}
        <Link
          to="/work"
          style={{
            textDecoration: "none",
            color: location.pathname === "/work" ? "red" : "white",
            backgroundColor:
              location.pathname === "/work" ? "white" : "transparent",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          Work
        </Link>{" "}
        |{" "}
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            color: location.pathname === "/contact" ? "red" : "white",
            backgroundColor:
              location.pathname === "/contact" ? "white" : "transparent",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          Contact
        </Link>
      </nav>

      {/* ハンバーガーメニュー（SP専用） */}
      <div className="sm:hidden md:hidden relative">
        {/* ハンバーガーボタン */}
        <button
          onClick={toggleMenu}
          style={{ backgroundColor: "transparent", border: "none" }}
          className="flex flex-col space-y-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* メニューの内容 */}
        <div
          className={`absolute top-12 right-0 w-40 bg-white text-black rounded shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          <Link
            to="/"
            onClick={toggleMenu}
            className="block px-4 py-2 hover:bg-gray-200"
            style={{
              color: location.pathname === "/" ? "red" : "black",
            }}
          >
            Home
          </Link>
          <Link
            to="/skill"
            onClick={toggleMenu}
            className="block px-4 py-2 hover:bg-gray-200"
            style={{
              color: location.pathname === "/skill" ? "red" : "black",
            }}
          >
            Skill
          </Link>
          <Link
            to="/work"
            onClick={toggleMenu}
            className="block px-4 py-2 hover:bg-gray-200"
            style={{
              color: location.pathname === "/work" ? "red" : "black",
            }}
          >
            Work
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block px-4 py-2 hover:bg-gray-200"
            style={{
              color: location.pathname === "/contact" ? "red" : "black",
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
