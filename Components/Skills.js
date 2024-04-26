import { useTheme } from 'next-themes';
import "../styles/skills.css";

const Skills = () => {
  return (
    <div id="skills" className="section-container">
      <div className="skills-header py-4 text-center">
        <h2>My Skills</h2>

        <div className="header-text my-6 px-6  text-grayishBlue">
          <p className=" text-sm text-justify md:text-base">
            Below are the technologies and frameworks I use in creating
            exceptional web applications, problem solving and providing smooth
            and unique UI to users.
          </p>
        </div>
      </div>

      <div className="my-skills my-6">
        <div className="marquee text-white overflow-hidden whitespace-nowrap">
          <div className="flex  marquee-group animate-marquee text-center space-x-6">
            <div className="flex flex-col">
              <span className="skill-icons--html"></span>
              <h6 className="text-sm">HTML</h6>
            </div>
            <div className="flex flex-col">
              <span className="skill-icons--css"></span>
              <h6 className="text-sm">CSS</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-bootstrap"></span>
              <h6>Bootstrap</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-tailwind"></span>
              <h6>Tailwind</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-javascript"></span>
              <h6>Javascript</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-react"></span>
              <h6>React</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-next"></span>
              <h6>Next Js</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-angular"></span>
              <h6>Angular</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-vue"></span>
              <h6>Vue</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-figma"></span>
              <h6>Figma</h6>
            </div>
            <div className="flex flex-col">
              <span className="skill-icons--html"></span>
              <h6 className="text-sm">HTML</h6>
            </div>
            <div className="flex flex-col">
              <span className="skill-icons--css"></span>
              <h6 className="text-sm">CSS</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-bootstrap"></span>
              <h6>Bootstrap</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-tailwind"></span>
              <h6>Tailwind</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-javascript"></span>
              <h6>Javascript</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-react"></span>
              <h6>React</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-next"></span>
              <h6>Next Js</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-angular"></span>
              <h6>Angular</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-vue"></span>
              <h6>Vue</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-figma"></span>
              <h6>Figma</h6>
            </div>
          </div>

          <div className="flex marquee-group animate-reverse-marquee text-center space-x-6 mt-6">
            <div className="flex flex-col">
              <span className="skill-icons--nodejs-dark"></span>
              <h6 className="text-sm">Node Js</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-javascript"></span>
              <h6>Javascript</h6>
            </div>
            <div className="flex flex-col">
              <span className="logos--php"></span>
              <h6 className="text-sm">PHP</h6>
            </div>
            <div className="flex flex-col">
              <span className="logos--laravel"></span>
              <h6 className="text-sm">Laravel</h6>
            </div>
            <div className="flex flex-col">
              <span className="logos--mongodb-icon"></span>
              <h6 className="text-sm">MongoDB</h6>
            </div>
            <div className="flex flex-col">
              <span className="devicon--mysql-wordmark"></span>
              <h6 className="text-sm">MySQL</h6>
            </div>
            <div className="flex flex-col">
              <span className="skill-icons--typescript"></span>
              <h6 className="text-sm">TypeScript</h6>
            </div>
            <div className="flex flex-col">
              <span className="devicon--sqldeveloper"></span>
              <h6 className="text-sm">SQL</h6>
            </div>
            <div className="flex flex-col">
              <span className="skill-icons--graphql-dark"></span>
              <h6>Graphql</h6>
            </div>
            <div className="flex flex-col">
              <span className="skill-icons--nodejs-dark"></span>
              <h6 className="text-sm">Node Js</h6>
            </div>
            <div className="flex flex-col">
              <span className="skills-icon-javascript"></span>
              <h6>Javascript</h6>
            </div>
            <div className="flex flex-col">
              <span className="logos--php"></span>
              <h6 className="text-sm">PHP</h6>
            </div>
            <div className="flex flex-col">
              <span className="logos--laravel"></span>
              <h6 className="text-sm">Laravel</h6>
            </div>
            <div className="flex flex-col">
              <span className="logos--mongodb-icon"></span>
              <h6 className="text-sm">MongoDB</h6>
            </div>
            <div className="flex flex-col">
              <span className="devicon--mysql-wordmark"></span>
              <h6 className="text-sm">MySQL</h6>
            </div>
            <div className="flex flex-col">
              <span className="skill-icons--typescript"></span>
              <h6 className="text-sm">TypeScript</h6>
            </div>
            <div className="flex flex-col">
              <span className="devicon--sqldeveloper"></span>
              <h6 className="text-sm">SQL</h6>
            </div>
            <div className="flex flex-col">
              <span className="skill-icons--graphql-dark"></span>
              <h6>Graphql</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
