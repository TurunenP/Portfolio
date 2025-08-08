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

//     </footer>
//   );
// };

// export default Footer;

// Footer
// import React from "react";
// import Logo from "../assets/PT.JPG";

// const Footer = () => {
//   return (
//     <div className="bg-[#171f36] text-white p-10 flex items-center justify-center">
//       <img src={Logo} alt="LogoImage" className="w-6 h-6 mr-2" />
//       <h2 className="text-sm">
//         Copyright &copy; 2025 <span className="font-bold">TurunenP</span>
//       </h2>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/PT.JPG";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-gray-400 py-12 px-6">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left side: Role and contact */}
        <div className="text-center md:text-left">
          <p className="text-xl font-bold mb-2">Full Stack Developer</p>
          <p>
            <a
              href="mailto:purity@example.com"
              className="hover:text-pink-600 transition-colors"
            >
              purity@example.com
            </a>
          </p>
        </div>

        {/* Center: Logo and copyright */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="LogoImage" className="w-10 h-10 rounded-full" />
          <h2 className="text-sm">
            Copyright &copy; 2025 <span className="font-bold">TurunenP</span>
          </h2>
        </div>

        {/* Right side: Social Icons */}
        <div className="flex space-x-6 text-gray-400 text-2xl">
          <a
            href="https://github.com/TurunenP"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-pink-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-pink-600"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
