import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faServer } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
  return (
    <div id="services" className="max-w-7xl mx-auto px-8 md:px-12 py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-grayishBlue dark:text-white mb-10">What I do</h2>
      <div className="flex flex-col md:flex-row md:items-center mb-8">
        <p className="text-gray-600 md:mr-8 mb-4 md:mb-0 max-w-3xl">
          From understanding your requirements, designing a blueprint and delivering the final
          product, I do everything that falls in between these lines.
        </p>
      
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={faLaptopCode}
          title="WEB DEVELOPER"
          description="If you're seeking a developer to handle the research and development of your website, I'm here to help. I specialize in building responsive and engaging user interfaces, focusing on turning ideas into visually appealing and interactive web applications. My aim is to create user-friendly experiences that perform smoothly across all devices and browsers."
        />
        <ServiceCard
          icon={faServer}
          title="BACKEND DEVELOPER"
          description="As a Back-End Developer, I specialize in building robust server-side solutions and APIs, ensuring secure, scalable, and efficient applications. My expertise spans across technologies like Node.js, Express.js, and MongoDB, along with RESTful API development and integration. I also have experience working with authentication systems (JWT, OAuth), database optimization, and cloud deployment using platforms like Vercel. My focus is on delivering clean, maintainable code while optimizing performance and ensuring smooth communication between the front-end and back-end."
        />
        <ServiceCard
          icon={faMobileAlt}
          title="APP DEVELOPMENT"
          description="If you are looking for a user-friendly app that will attract more mobile users, I can help you design and build a platform with the latest and trendiest look and feel."
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div  className="p-6 border border-gray-200 rounded-lg transition-transform duration-500 ease-out hover:-translate-y-4 hover:shadow-lg">
      <div className="mb-4">
        <FontAwesomeIcon icon={icon} className="dark:text-grayishBlue w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Services;