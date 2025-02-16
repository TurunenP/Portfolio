// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import Logo from "../assets/PT.JPG";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0a192f] text-gray-400 py-6 pt-6">
//       <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 ">
//         <div className="text-center md:text-left">
//           {/* <h1 className="text-2xl font-bold text-pink-600">Your Name</h1> */}
//           <p className="text-xl font-bold">Full Stack Developer</p>
//         </div>

//         <div className="bg-[#0a192f] text-white p-10 flex items-center justify-center">
//           <img src={Logo} alt="LogoImage" className="w-6 h-6 mr-2" />

//           <h2 className="text-sm">
//             Copyright &copy; 2025 <span className="font-bold">TurunenP</span>
//           </h2>
//         </div>
//       </div>

//       {/* <div className="text-center text-gray-600 mt-4">
//         © {new Date().getFullYear()} PT. All rights reserved.
//       </div> */}
//     </footer>
//   );
// };

// export default Footer;


// Footer
import React from 'react';
import Logo from '../assets/PT.JPG';

const Footer = () => {
  return (
    <div className='bg-[#171f36] text-white p-10 flex items-center justify-center'>
      <img src={Logo} alt="LogoImage" className="w-6 h-6 mr-2" />
      <h2 className="text-sm">
        Copyright &copy; 2025 <span className="font-bold">TurunenP</span>
      </h2>
    </div>
  );
};

export default Footer;