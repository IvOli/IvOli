import React from "react";
import Header from "./header/Header"
import Name from "./body/Name";
import About from "./body/About";
import Projects from "./body/Projects";
import FormContact from "./body/FormContact";
import Footer from "./body/Footer";

function App(){
      return  (
        <React.Fragment>
            <Header />
            <Name />
            <About />
            <h3 id="projects">Projects</h3>
            <Projects />
            <FormContact />
            <Footer />

            
        </React.Fragment>
      );
}

export default App