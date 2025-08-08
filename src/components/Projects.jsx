import React from "react";
import Little from "../assets/projects/Lemon.JPG";
import elegantShoes from "../assets/projects/elegantShoes.JPG";
import tastyEats from "../assets/projects/tastyEats.JPG";
import crypto from "../assets/projects/crypto.JPG";
//import Robotics from "../assets/projects/Lab.png"; // Use the correct image path you want
import Lab from "../assets/projects/Lab.png"; // Looks like same as Robotics? Remove if duplicate
import Footer from "./Footer";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-6 mt-20">
          <p
            style={{ zIndex: 50, visibility: "visible", position: "relative" }}
            className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600"
          >
            Projects
          </p>
          <p className="py-4 text-xl">Check out some of my school projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-2">
          <div
            style={{ backgroundImage: `url(${Lab})` }}
            className="h-[220px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                University of Oulu: Robotics Lab Inventory System
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://updated-inventory.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/TurunenP/Updated-Inventory.git"
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
            style={{ backgroundImage: `url(${elegantShoes})` }}
            className="h-[220px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS ElegantShoes Application
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
            className="h-[220px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
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
            className="h-[220px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                TastyEatsRecipe Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://react-tasty-eats.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/TurunenP/ReactTastyEats"
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
            style={{ backgroundImage: `url(${Little})` }}
            className="h-[220px] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Coursera Little Lemon Restaurant (UX/UI)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/TurunenP/Coursera_Little-Lemon-restaurant"
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
