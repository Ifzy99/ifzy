import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div id="hero" className="section-container min-h-full mt-20">
        <div className="p-4 md:px-8 mx-6 rounded-2xl">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0e3e6b] dark:text-[#4ec1b5] mb-4 transition-colors duration-300 tracking-widest leading-snug">
            I'm Web Developer <br className="hidden sm:inline" />
            Ifeoluwa A. Olatunbosun
          </h1>
              <div className="my-6 tracking-wide  leading-7 md:text-left text-darkGrayishBlue">
                <p className="animate-bounce text-2xl  text-darkGrayishBlue">
                  Welcome to my space.
                </p>
                <p className="italic text-grayishBlue transition duration-200 ease-in dark:text-red-300     ">
                  I am a fullstack web developer, who loves bulding interactive
                  and effective web applications.
                </p>
              </div>
              <Button/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
