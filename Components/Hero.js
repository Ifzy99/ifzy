import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div id="hero" className=" section-container flex min-h-full">
        <div className="p-2 mx-6 rounded-2xl">
          <div className="relative flex flex-col md:flex-row space-y-10">
            <div className="mx-auto md:order-2">
              <Image
                src="/Images/Ifeoluwa-removebg.png"
                alt=""
                width={250}
                height={250}
                className="md:absolute rounded-full"
              />
            </div>
            <div className="p-4 space-y-6 md:space-y-12 md:w-1/2">
              <h1 className="font-serif font-bold text-3xl mt-0 md:mt-4 text-veryDarkBlue">
                Hello!
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
