import React from "react";
import logo from "../techtonic-logo.png";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-5 md:py-6 px-8 md:px-20 flex justify-between items-center bg-[#080808]/80 backdrop-blur-md border-b border-white/[0.05]">
      <div className="flex items-center">
        <a href="/" className="transition-opacity hover:opacity-80">
          <img
            src={logo}
            alt="Techtonic"
            className="h-8 md:h-10 w-auto object-contain select-none"
          />
        </a>
      </div>

      <a
        href="mailto:hello@techtonic.com"
        className="text-[10px] uppercase tracking-[0.3em] font-semibold border border-white/10 px-6 py-2.5 rounded-none hover:bg-white hover:text-black hover:border-white transition-all duration-500 ease-in-out"
      >
        Contact
      </a>
    </header>
  );
};
