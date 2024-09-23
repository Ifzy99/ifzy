import Image from "next/image";
import Button from "./Button";
import Link from 'next/link';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import useIntersectionObserver from "@/pages/lib/useIntersectionObserver";
import AnimatedText from "./AnimatedText";


const Hero = () => {
  const sectionRef = useIntersectionObserver({ threshold: 0.3 });

  
  return (
    <>
      <div id="hero" className="section-container min-h-full mt-20">
        <div ref={sectionRef}  className="p-4 md:px-8 mx-6 rounded-2xl animate-slide-left">
          <div className="relative flex flex-col md:flex-row space-y-10">
            <div className="mx-auto md:order-2">
              <Image
                src="/Images/Ifeoluwa-removebg.png"
                alt="ifeoluwa Image"
                width={250}
                height={250}
                className="md:absolute rounded-full"
              />
            </div>
            <div className="p-4 space-y-6 md:space-y-12 md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-800 dark:text-[#4ec1b5] mb-4 transition-colors duration-300 tracking-widest leading-snug">
            <AnimatedText text="I'm Web Developer"/> <br className="hidden sm:inline" />
            <AnimatedText text="Ifeoluwa A. Olatunbosun" />
          </h1>
              <div className="my-6 tracking-wide  leading-7 md:text-left text-darkGrayishBlue">
                <p className="animate-bounce text-2xl  text-darkGrayishBlue">
                  Welcome to my space.
                </p>
                <p className="italic text-grayishBlue mb-4 transition duration-200 ease-in">
                  I am a fullstack web developer, who loves bulding interactive
                  and effective web applications.
                </p>
              </div>
              <Link href="https://github.com/Ifzy99">
              <Button text="Github" icon={faGithub} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
