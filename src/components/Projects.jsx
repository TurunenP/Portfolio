import React from 'react';
import Little from '../assets/projects/Lemon.JPG';
import elegantShoes from '../assets/projects/elegantShoes.JPG';
import Robotics from '../assets/projects/RoboLab.JPG';
import tastyEats from '../assets/projects/tastyEats.JPG';
import crypto from '../assets/projects/crypto.JPG';

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            PROJECTS
          </p>
          <p className="py-6">Check out some of my school projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${elegantShoes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                ReacJS ElegantShoes Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://elegant-shoes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/TurunenP/ElegantShoes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${crypto})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                Crypto Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://crypto-app-beta-six.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/TurunenP/Crypto-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${tastyEats})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                TastyEatsRecipe Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://react-tasty-eats.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/TurunenP/ReactTastyEats">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Little})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                Coursera_Little-Lemon-restaurant:(UX/UI)
              </span>
              <div className="pt-8 text-center">
                {/* <a href='/'>
        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>OnGoing</button>
              </a> */}
                <a href="https://github.com/TurunenP/Coursera_Little-Lemon-restaurant">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

        
          <div
            style={{ backgroundImage: `url(${Robotics})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                University of Oulu: Robotics Lab Inventory System
              </span>
              <div className="pt-8 text-center">
                <a href="https://robo-lend-lab-equipment-inventory-system.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/RoboLend-Lab-Equipment-Inventory-System/RoboLend-Lab-Equipment-Inventory-System.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
