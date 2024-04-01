import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-full">
        <div className="bg-teal-50 p-2 mx-6 rounded-2xl">
          <div className="flex flex-col md:flex-row space-y-10">
            <div className="mx-auto md:order-2">
              <Image
                src="/Images/Ifeoluwa.jpg"
                alt=""
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
            <div className="p-4 space-y-6 md:space-y-12 md:w-1/2">
              <h1 className="font-serif font-bold text-3xl mt-0 md:mt-8">
                Hello, I'm Ifeoluwa.
              </h1>
              <p className="my-6 tracking-wide  my-4 leading-7 md:text-left">
                Welcome to my space. I am a fullstack web developer, who loves
                bulding interactive and effective web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
