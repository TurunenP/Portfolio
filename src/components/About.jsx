// import React from "react";
// import Footer from "./Footer";

// const About = () => {
//   return (
//     // <div
//     //   name="about"
//     //   className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-32 " >
//     <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
//       <div className="flex-grow flex flex-col justify-center items-center w-full h-full">
//         <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
//           <div className="sm:text-right pb-8 pl-4">
//             <p className="text-4xl font-bold inline border-b-4 border-pink-600">
//               About
//             </p>
//           </div>
//           <div></div>
//         </div>
//         <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
//           <div className="sm:text-right text-4xl font-bold">
//             <p>Hi. I'm Purity, nice to meet you. Please take a look around.</p>
//           </div>
//           <div>
//             <p>
//               I’m passionate about building impactful software and eager to grow
//               my skills in a professional setting. Through school projects, I’ve
//               developed problem-solving abilities and built effective solutions.
//               I’m excited to learn, contribute, and grow as part of a dynamic
//               team. Let’s build something great together!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

//Changes
import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex flex-col"
    >
      <div className="flex-grow flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Purity, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I’m passionate about building impactful software and eager to grow
              my skills in a professional setting. Through school projects, I’ve
              developed problem-solving abilities and built effective solutions.
              I’m excited to learn, contribute, and grow as part of a dynamic
              team. Let’s build something great together!
            </p>
          </div>
        </div>
      </div>

      {/* Footer added here */}
      <Footer />
    </div>
  );
};

export default About;
