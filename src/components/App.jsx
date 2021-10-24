import React from "react";
import Header from "./header/Header"
import Name from "./body/Name";
import About from "./body/About";
import SocialNetworks from "./body/SocialNetworks";
import Projects from "./body/Projects";

function App(){
      return  (
        <div>
            <Header />
            <Name />
            <About />
            <h3 id="projects">Projects</h3>
            <Projects />
            <SocialNetworks />
            
        </div>
      );
}

export default App