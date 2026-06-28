import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./techtonic-logo.png";

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  const buttonClasses =
    "text-[10px] uppercase tracking-[0.3em] font-semibold border border-white/10 px-6 py-2.5 rounded-none hover:bg-[#FF851B] hover:text-black hover:border-[#FF851B] transition-all duration-500 ease-in-out";

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-5 md:py-6 px-8 md:px-20 flex justify-between items-center bg-[#080808]/80 backdrop-blur-md border-b border-white/[0.05]">
      <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
        <img
          src={logo}
          alt="Techtonic"
          className="h-8 md:h-10 w-auto object-contain select-none"
        />
      </Link>

      {isLanding ? (
        <a href="#cta" className={buttonClasses}>
          Book a call
        </a>
      ) : (
        <Link to="/" className={buttonClasses}>
          ← Techtonic
        </Link>
      )}
    </header>
  );
};
