import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-red-400 text-center py-8">
      <nav className="flex justify-center ">
        <ul className="list-none p-0 m-0 flex flex-col items-center gap-4">
          <li className="text-white font-bold">AM&nbsp;PF</li>
          <li className="mt-3 text-white">
            © {new Date().getFullYear()} Akahoshi&nbsp;Momoka Portfolio. All
            rights reserved.
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
