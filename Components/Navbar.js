"use client";
import Image from "next/image";
import "../styles/nav.css";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="container relative mx-auto p-6">
        <div className="flex items-center justify-between space-x-20 my-6">
          <div className="z-30">
            <Image
              width={100}
              height={100}
              src="/Images/myLogo.png"
              alt=""
              id="logo "
            />
          </div>

          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <a href="#home" className="tracking-widest hover:text-softRed">
              Home
            </a>
            <a href="#about" className="tracking-widest hover:text-softRed">
              About
            </a>
            <a href="#services" className="tracking-widest hover:text-softRed">
              Services
            </a>

            <a href="#skills" className="tracking-widest hover:text-softRed">
              Skills
            </a>

            <a href="#projects" className="tracking-widest hover:text-softRed">
              Projects
            </a>

            <a href="#contact" className="tracking-widest hover:text-softRed">
              Contact
            </a>
          </div>

          <button
            id="menu-btn"
            className={`z-30 block md:hidden focus:outline-none hamburger ${
              menuOpen ? "open" : ""
            }`}
            onClick={navToggle}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div
          id="menu"
          className={`fixed inset-0 z-20 ${
            menuOpen ? "flex" : "hidden"
          } flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue md:hidden`}
        >
          <div className="w-full py-3 text-center">
            <a href="#home" className="block hover:text-softRed">
              Home
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#about" className="block hover:text-softRed">
              About
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#services" className="block hover:text-softRed">
              Services
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="skills" className="block hover:text-softRed">
              Skills
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="projects" className="block hover:text-softRed">
              Projects
            </a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="contact" className="block hover:text-softRed">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
