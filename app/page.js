import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Project from "@/Components/Project";
import Skills from "@/Components/Skills";
import SocialIcons from "@/Components/SocialIcons";
// import Just from "@/Components/Just";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Project/>
      <Contact/>
      {/*<Just/>*/}
      <SocialIcons/>
      <Footer />
    </>
  );
}
