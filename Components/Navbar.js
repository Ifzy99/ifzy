"use client";
import "../styles/nav.css";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import DarkModeToggler from "./DarkModeToggler";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navToggle = () => {
    setMenuOpen(!menuOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav 
      className={`w-full transition-all duration-300 
        ${isFixed 
          ? 'fixed top-0 left-0 z-50 shadow-md' 
          : 'absolute top-0 left-0 z-50'}
        ${isFixed ? 'bg-opacity-90' : 'bg-transparent'}`}
      style={{
        backgroundColor: isFixed ? 'var(--background-color)' : 'transparent',
        color: isFixed ? 'var(--text-color)' : 'inherit'
      }}
    >
      <div className="container relative mx-auto p-3">
        <div className="flex items-center lg:px-8 justify-between space-x-20 ">
          <Logo />
          <NavLinks />
          <DarkModeToggler />
          <MobileMenu menuOpen={menuOpen} navToggle={navToggle} />
        </div>

        {/* Mobile Menu Links */}
        <div
          id="menu"
          className={`fixed inset-0 z-20 ${
            menuOpen ? "flex" : "hidden"
          } flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest uppercase divide-y divide-gray-500 opacity-90 bg-gray-900 dark:bg-gray-800 md:hidden`}
          style={{ color: 'var(--text-color)' }}
        >
          {/* Menu items... */}
          <div className="w-full py-3 text-center">
            <a href="#hero" className="block hover:text-yellow-600">Home</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#about" className="block hover:text-yellow-600">About</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#services" className="block hover:text-yellow-600">Services</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#skills" className="block hover:text-yellow-600">Skills</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#projects" className="block hover:text-yellow-600">Projects</a>
          </div>
          <div className="w-full py-3 text-center">
            <a href="#contact" className="block hover:text-yellow-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;