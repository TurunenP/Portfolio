// import About from './components/About';
// import Contact from './components/Contact';
// //import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
//     <Navbar/>
//     {/* <Hero/> */}
//       <About/>
//       <Skills/>
//       <Projects/>
//       <Contact/> 
//        <Footer/>    
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("about"); // Track the active section

  return (
    <div className="scroll-smooth">
      {/* Pass setActiveSection to Navbar so it can update the active section */}
      <Navbar setActiveSection={setActiveSection} />

      {/* Conditionally render sections based on activeSection */}
      {activeSection === "about" && <About />}
      {activeSection === "skills" && <Skills />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "contact" && <Contact />}
      {/* Add more sections like Projects, Contact as needed */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
