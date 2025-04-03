import React from "react";
const Contact: React.FC = () => {
  return (
    <article>
      <div className="w-full h-30 sm:h-80 md:h-80 text-left bg-red-400 flex justify-center items-center">
        <h1 className="text-xs sm:text-lg md:text-2xl font-bold mb-4 text-white">
          Contact
        </h1>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100"></div>
    </article>
  );
};

export default Contact;
