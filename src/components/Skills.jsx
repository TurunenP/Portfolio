import React from 'react';
import PythonImg from '../assets/Python.JPG';
import JavaImg from '../assets/Java.JPG';
import FireBase from '../assets/firebase.png';
import Mobile from '../assets/Flutter-Kt.JPG';
import GitHub from '../assets/github.png';
import PHP from '../assets/PHP.JPG';
import Mongo from '../assets/mongo.png';
import JS from '../assets/HTMLCSSJS.png';
import ReactNode from '../assets/ReactNode.JPG';
import Material from '../assets/Material UI.JPG';
import Footer from './Footer';

const Skills = () => {
  return (
    // <div
    //   name="skills"
    //   className="w-full h-screen bg-[#0a192f] text-gray-300 pt-20"
    // >
    <div
      name="skills"
      className="w-full h-[100vh] bg-[#0a192f] text-gray-300 pt-0"
    >
      {/* <div name="skills" className="w-full bg-[#0a192f] text-gray-300 pt-32"> */}
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4 text-xl">
            These are the technologies I've worked with:
          </p>
        </div>
        {/* Icons Container */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-6">
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-24 mx-auto" src={JS} alt="HTML icon" />
            <p className="my-4 ">HTML, CSS & JS</p>
          </div>
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-20  mx-auto" src={ReactNode} alt="HTML icon" />
            <p className="my-4 ">REACTJS + Node</p>
            <p className="my-4 ">REACT NATIVE</p>
          </div>
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-24 mx-auto" src={Material} alt="HTML icon" />
            <p className="my-4">Material ui</p>
          </div>
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-24 mx-auto" src={Mobile} alt="HTML icon" />
            <p className="my-4">Flutter/Kotlin</p>
          </div>
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-24 mx-auto" src={PythonImg} alt="HTML icon" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-20 h-20 mx-auto" src={JavaImg} alt="HTML icon" />
            <p className="my-4">JAVA</p>
          </div>
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-20 h-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-24 mx-auto" src={PHP} alt="HTML icon" />
            <p className="my-4">PHP & MYSQL</p>
          </div>
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-20 h-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"> */}
          <div className="shadow-md shadow-[#474c52] hover:scale-110 duration-500 h-[8rem]">
            <img className="w-20 h-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GIT & GITHUB</p>
          </div>
        </div>
        <div className="pt-20 md:pt-12 lg:pt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Skills;