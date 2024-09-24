"use client"
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Project from "@/Components/Project";
import Skills from "@/Components/Skills";
import SocialIcons from "@/Components/SocialIcons";
import Services from '@/Components/Services';

export default function Home() {
  
  return (
    <>
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar  />
      <Hero />
      <Services/>
      <About />
      <Skills/>
      <Project/>
       <Contact/>
      <SocialIcons/>
      <Footer />
      </div>
    </>
  );
}
