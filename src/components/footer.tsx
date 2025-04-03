import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-red-400 text-center">
      <nav className="flex w-5/6 m-auto py-8 gap-4">
        <ul className="list-none p-0 m-0 flex flex-col items-start gap-2">
          <li className="text-white">AM&nbsp;PF</li>
          <li>
            <Link
              to="/"
              style={{ color: "white" }}
              className="text-white hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skill"
              style={{ color: "white" }}
              className="text-white no-underline hover:text-gray-300"
            >
              Skill
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              style={{ color: "white" }}
              className="text-white no-underline hover:text-gray-300"
            >
              Work
            </Link>
          </li>
        </ul>
        <ul className="list-none p-0 m-0 flex flex-col items-start gap-2">
          <li className="text-white no-underline hover:text-gray-300">
            CONTACT US
          </li>
          <li className="text-white no-underline hover:text-gray-300">
            GitHub
          </li>
          <li className="text-white no-underline hover:text-gray-300">
            <Link
              to="/contact"
              style={{ color: "white" }}
              className="text-white no-underline hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <p className="mt-4 text-white">
        © {new Date().getFullYear()} Akahoshi&nbsp;Momoka Portfolio. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
