import { Link, useLocation } from "react-router-dom";
import Heroicon from "../assets/images/cow.svg";
import React, { useState, useEffect, useRef } from "react";

type Navigation = {
  link: string;
  navName: string;
};

const navigation: Navigation[] = [
  {
    link: "/",
    navName: "Home",
  },
  {
    link: "/skill",
    navName: "Skill",
  },
  {
    link: "/work",
    navName: "Work",
  },
  {
    link: "/achievements",
    navName: "Achievements",
  },
  {
    link: "/contact",
    navName: "Contact",
  },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    document.body.style.paddingTop = `${headerHeight}px`;
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !headerRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
        <img
          src={Heroicon}
          className="h-12 w-auto"
          width={100}
          height={100}
          alt="Hero icon"
        />
        <h3 className="text-2xl font-bold ">AM Portfolio</h3>
      </Link>

      {/* ナビゲーションメニュー */}
      <nav className="text-white p-2 hidden sm:block md:block">
        {navigation.map((navItem) => (
          <React.Fragment key={navItem.link}>
            <Link
              to={navItem.link}
              className={`
              border-b px-2 py-1 rounded 
              ${location.pathname === navItem.link ? "text-red-400 bg-white border-black" : "text-white border-transparent"} 
              hover:bg-white hover:text-red-400
            `}
            >
              {navItem.navName}
            </Link>{" "}
            |{" "}
          </React.Fragment>
        ))}
      </nav>

      {/* ハンバーガーメニュー（SP専用） */}
      <div className="sm:hidden md:hidden relative">
        {/* ハンバーガーボタン */}
        <button
          onClick={toggleMenu}
          style={{ backgroundColor: "transparent", border: "none" }}
          className="flex flex-col space-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          ref={menuRef}
          className={`absolute top-12 right-0 w-40 bg-white text-black rounded shadow-lg transform transition-transform duration-300 ease-in-out hover:bg-white ${
            isMenuOpen
              ? "scale-100 opacity-100 "
              : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          {navigation.map((navItem) => (
            <Link
              key={navItem.link}
              to={navItem.link}
              onClick={toggleMenu}
              className="block px-4 py-2 hover:bg-gray-200"
              style={{
                color: location.pathname === navItem.link ? "red" : "black",
              }}
            >
              {navItem.navName}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
