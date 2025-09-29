// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// const App = () => {
//   const [activeSection, setActiveSection] = useState("about");

//   return (
//     <div className="scroll-smooth">
//       {/* Pass setActiveSection to Navbar */}
//       <Navbar setActiveSection={setActiveSection} />

//       {/* All sections rendered one after another */}
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  // Scroll to top on page load / refresh
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar setActiveSection={setActiveSection} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
