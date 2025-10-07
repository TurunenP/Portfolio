import React from "react";
import elegantShoes from "../assets/projects/elegantShoes.JPG";
import crypto from "../assets/projects/crypto.JPG";
import Lab from "../assets/projects/Lab.png";

const Projects = () => {
  const projectData = [
    {
      title: "Oulu University: Robotics Lab Inventory System",
      img: Lab,
      demo: "https://updated-inventory.vercel.app/",
      github: "https://github.com/TurunenP/Updated-Inventory.git",
      description:
        //"Full-Stack MERN | CRUD, JWT Auth, Role-Based Access. Built a Robotics Lab Inventory System solving real equipment management challenges with secure CRUD operations and responsive UI. (Future: AI-powered search helper).",
        "Full-Stack MERN | CRUD, JWT Auth, Inventory Management. Solved real-world lab inventory challenges using full-stack MERN architecture. Implemented secure role-based access and efficient CRUD operations for managing robotics lab equipment. (Future work includes AI-powered search helper).",
    },

    {
      title: "ReactJS ElegantShoes Application",
      img: elegantShoes,
      demo: "https://elegant-shoes.vercel.app/",
      github: "https://github.com/TurunenP/ElegantShoes",
      //description:
      //  "E-commerce style React application demonstrating reusable components, routing, and responsive design. Tech stack: React, Tailwind CSS, JavaScript.",
      description:
        "Front-End React | Reusable Components, Routing, Responsive Design. Designed and developed an elegant e-commerce-style web app to showcase dynamic product listings and interactive UI. Focused on clean component structure, client-side routing, and responsive layouts using React and Tailwind CSS.",
    },
    {
      title: "Crypto Application",
      img: crypto,
      demo: "https://crypto-app-beta-six.vercel.app/",
      github: "https://github.com/TurunenP/Crypto-App",
      // description:
      //  "A React crypto tracking app showcasing API integration, state management, and dynamic UI updates. Tech stack: React, JavaScript, APIs.",
      description:
        "Front-End React | API Integration, State Management, Real-Time Data. Built a crypto tracking dashboard using live API data to display coin prices and market stats dynamically. Implemented efficient React state management for responsive updates and user-friendly visualization of cryptocurrency trends.",
    },
  ];

  return (
    <div name="projects" className="w-full text-gray-300 bg-[#0a192f] py-10">
      <div className="max-w-[1400px] mx-auto px-2 flex flex-col justify-center w-full">
        <div className="pb-6 mt-10 text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-2 text-xl">Check out some of my school projects:</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-full bg-[#112240] rounded-md shadow-lg shadow-[#040c16] p-4"
            >
              {/* Image */}
              <div
                style={{ backgroundImage: `url(${project.img})` }}
                className="h-[300px] w-full rounded-md bg-cover bg-center"
              ></div>

              {/* Description */}
              <div className="mt-4 text-center w-full">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-between mt-4 w-full gap-2">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full text-center rounded-lg px-3 py-2 text-sm bg-white text-gray-700 font-semibold hover:bg-pink-600 hover:text-white transition duration-300">
                    Demo
                  </button>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full text-center rounded-lg px-3 py-2 text-sm bg-white text-gray-700 font-semibold hover:bg-pink-600 hover:text-white transition duration-300">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
