"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs,faReact, faBootstrap, faFigma, faNodeJs,  faGithub, faGitAlt, faAngular,faVuejs, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, } from '@fortawesome/free-solid-svg-icons';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';


const Skills = () => {
  
  
  const skillsData = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJs },
    { name: 'React.js', icon: faReact },
    { name: 'Next.JS', icon: faReact },
    { name: 'Bootstrap', icon: faBootstrap },
    { name: 'Tailwind', icon: faCode },
    { name: 'Angular', icon: faAngular },
    { name: 'Figma', icon: faFigma },
    { name: 'Vue.JS', icon: faVuejs },
  ];

  const backendSkills = [
    { name: 'JavaScript', icon: faJs },
    { name: 'SQLServer', icon: faDatabase },
    { name: 'Node.JS', icon: faNodeJs },
    { name: 'MongoDB', icon: faDatabase },
    { name: 'TypeScript', icon: faCode },
    { name: 'PHP', icon: faPhp },

  ];

  const versionControlSkills = [
    { name: 'Git', icon: faGitAlt },
    { name: 'GitHub', icon: faGithub },
  ];

  return (
    <div id="skills"  className="p-4 md:p-8 bg-rgba(212, 217, 217, 0.5) dark:bg-gray-900 text-grayishBlue dark:text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center text-#333 dark:darkGrayishBlue">My Skills</h2>
     

      
      <div className="space-y-6 my-8">  
        <SkillSection title="Frontend" skills={skillsData} />
        <SkillSection title="Backend Languages and DB :" skills={backendSkills} />
        <SkillSection title="Version Control :" skills={versionControlSkills} />
      </div>
    </div>
  );
};

const SkillSection = ({ title, skills }) => {
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Element is in view!');
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  };

  const elementRef = useIntersectionObserver(handleIntersection,{root: null,
    rootMargin: '0px', threshold: 0.3 });
  return (
    <div ref={elementRef} className=" px-8 md:px-12  py-4 animate-slide-left">
      <h3 className="text-xl sm:text-l font-medium mb-4">{title}</h3>
      <div className="flex flex-wrap justify-between sm:justify-start gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 px-4 py-2 rounded-md flex items-center space-x-2 w-[calc(50%-0.375rem)] sm:w-auto">
            <FontAwesomeIcon icon={skill.icon} className="text-xl sm:text-2xl" />
            <span className="text-sm  sm:text-base">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;