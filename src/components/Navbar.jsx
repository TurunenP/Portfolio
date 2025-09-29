import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/PT.JPG";
import "../index.css";

const Navbar = ({ setActiveSection }) => {
  // Accept setActiveSection as a prop
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const handleNavClick = (section) => {
    setActiveSection(section); // Update activeSection when clicked
    setNav(false); // Close the mobile menu on click
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <a
          href="https://github.com/TurunenP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Logo}
            alt="LogoImage"
            style={{
              width: "70px",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
        </a>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-8 pr-16">
        <li className="text-xl font-semibold">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => handleNavClick("about")}
          >
            About
          </Link>
        </li>
        <li className="text-xl font-semibold">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </Link>
        </li>
        <li className="text-xl font-semibold">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </Link>
        </li>
        <li className="text-xl font-semibold">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={() => handleNavClick("about")}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={() => handleNavClick("skills")}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={() => handleNavClick("projects")}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={() => handleNavClick("contact")}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
