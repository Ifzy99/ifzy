"use client";
import "../styles/nav.css";
import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import DarkModeToggler from "./DarkModeToggler";
// import ModeToggler from "./ModeToggler";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const navToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="container relative mx-auto p-3">
        <div className="flex items-center justify-between space-x-20 my-4">
          <Logo />
          <NavLinks />
           <DarkModeToggler/>
          <MobileMenu menuOpen={menuOpen} navToggle={navToggle} />
        </div>

        {/* Mobile Menu Links*/}

        <div
          id="menu"
          className={`fixed inset-0 z-20 ${
            menuOpen ? "flex" : "hidden"
          } flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue md:hidden`}
        >
          <div className="w-full py-3 text-center">
            <a href="#hero" className="block hover:text-yellow-600">
              Home
            </a>
          </div>

          <div className="w-full py-3 text-center">
            <a href="#about" className="block hover:text-yellow-600">
              About
            </a>
          </div>

          <div className="w-full py-3 text-center">
            <a href="#services" className="block hover:text-yellow-600">
              Services
            </a>
          </div>

          <div className="w-full py-3 text-center">
            <a href="#skills" className="block hover:text-yellow-600">
              Skills
            </a>
          </div>

          <div className="w-full py-3 text-center">
            <a href="#projects" className="block hover:text-yellow-600">
              Projects
            </a>
          </div>

          <div className="w-full py-3 text-center">
            <a href="#contact" className="block hover:text-yellow-600        ">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
