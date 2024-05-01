"use client";
import useInViewAnimation from "@/pages/lib/useInViewAnimation";

const About = () => {
  const [animationRef, isInView] = useInViewAnimation({
    root: null, // Use the viewport as the root
    rootMargin: "0px", // No root margin
    threshold: 0.5, // 50% of the element must be visible to trigger the animation
  });
  return (
    <div id="about"
      className="section-container flex flex-col"
      ref={animationRef}
    >
      <div className="mx-auto p-6 my-5 md:mt-20">
        <h2
          className={`font-black text-2xl tracking-widest text-veryDarkBlue ${
            isInView ? "animate-slide-left" : ""
          }`}
        >
          Who am I
        </h2>
      </div>
      <div className="mx-auto p-6 tracking-wide max-w-6xl text-grayishBlue text-base md:text-lg">
        <h2
          className={` my-4 text-3xl font-bold text-darkViolet font-serif leading-9 ${
            isInView ? "animate-slide-up" : ""
          } `}
        >
          {" "}
          I'm Olatunbosun Ifeoluwa.
        </h2>
        <div
          className={` aboutTxt text-sm  md:text-base ${
            isInView ? "animate-slide-left" : ""
          }`}
        >
          <p>
            A Fullstack web developer with a passion for building and designing
            intuitive and dynamic websites with seamless user experiences.
            Well-organised fellow,problem-solver and an apt mind to details. I
            yearn to code so as to be able to build awesome websites and web
            applications that will provide solutions to for people all over the
            world.
          </p>
          <p className="my-4">
            When I'm not coding you'll catch me watching my favorite football
            club Arsenal's game or chatting with friends on all things sports or
            life in general. A fan of music as well when coding especially when
            it comes to designing a project or website.
          </p>
          <p>
            My drive for excellence, attention to detail, and constant eagerness
            to learn is one positive I consider is important for any development
            role. Interested in the entire fullstack spectrum and looking
            forward to working on/with amazing projects and positive people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
