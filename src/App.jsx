import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "./style";
import { BrowserRouter as Router } from "react-router-dom";
import { menu, close } from "./assets";
import {
  Navbar,
  Hero,
  About,
  Education,
  Skills,
  Projects,
  Contact,
} from "./Components";
function App() {
  return (
    <Router>
      <div className="bg-[#050816] text-white overflow-x-hidden">
        <div className="flex flex-col bg-hero bg-no-repeat bg-cover">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
