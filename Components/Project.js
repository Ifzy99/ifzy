"use client";
import React, { useEffect, useRef} from 'react';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/just.css"

const Project = () => {
  const projectRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.3 });

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  const projectsData = [
    {
      title: "IFZY College",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae expedita enim ipsa voluptatum inventore fugiat tempore vero dignissimos facilis ea? !.",
      stacks: "Stacks: Vite + React.JS, React-Redux, Bootstrap, NodeJS, MongoDB.",
      githubLink: "",
      liveLink: "",
      category: "LMS App"
    },
    {
      title: "FinBank",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae expedita enim ipsa voluptatum inventore fugiat tempore vero dignissimos facilis ea? !.",
      stacks: "Stacks: Javascript,HTML, CSS, Bootstrap.",
      githubLink: "",
      liveLink: "https://finbankapp.netlify.app/",
      category: "FinTech Web App"
    },
    {
      title: "Printivo",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae expedita enim ipsa voluptatum inventore fugiat tempore vero dignissimos facilis ea? !.",
      stacks: "Stacks: Vite + React, Javascript, Bootstrap.",
      githubLink: "https://github.com/Ifzy99/printivoApp",
      liveLink: "https://printivo-app.vercel.app",
      category: "E-Commerce Landing Page"
    },
    {
      title: "Weather App",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae expedita enim ipsa voluptatum inventore fugiat tempore vero dignissimos facilis ea? !.",
      stacks: "Stacks: Javascript, Bootstrap, HTML and CSS.",
      githubLink: "https://github.com/Ifzy99/weatherForecast",
      liveLink: "",
      category: "Weather Forecast App"
    },
    {
      title: "IFZY College",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae expedita enim ipsa voluptatum inventore fugiat tempore vero dignissimos facilis ea? !.",
      stacks: "Stacks: Vite + React.JS, React-Redux, Bootstrap, NodeJS, MongoDB.",
      githubLink: "",
      liveLink: "",
      category: "LMS App"
    },
  ];

  return (
    <div id="projects" className="section-container">
    <h2 className="text-4xl font-bold text-center mb-8 text-#333 dark:darkGrayishBlue">Projects</h2>
    <div className="text-#333 dark:text-white md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            ref={el => projectRefs.current[index] = el}
            className="projects-card bg-rgba(212, 217, 217, 0.5) dark:bg-veryDarkViolet border border-gray-300 dark:border-gray-500 rounded-md p-1 md:p-1 animate-slide-left"
          >
            <div className="py-2 text-left space-y-0 flex flex-row justify-between md:px-8 px-2 items-center">
              <div className="pb-3">
                <span className="text-[20px] md:text-[24px]">{project.title}</span>
              </div>
              <div className="justify-end project-links dark:text-grayishBlue">
                <a href={project.githubLink}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
            <p className="px-2 py-2 md:px-8 md:py-4 text-sm md:text-base">{project.description}</p>
            <p className="p-2 md:px-8 text-sm dark:text-gray-400">{project.stacks}</p>
            <div className="w-full border-t border-gray-200 dark:border-[#1F1F22] py-4 md:px-8 px-2">
              <div className="flex flex-row justify-between items-center">
                <div className="py-2 px-4 rounded-xl border border-orange-400/50 text-orange-400 bg-orange-400/10">
                  {project.category}
                </div>
                <div className="">
                  <a href={project.liveLink}>
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Project;