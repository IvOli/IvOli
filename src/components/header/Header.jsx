import React from "react";
import logo from "../../img/logo.png"
import Contact from "../Contact";

function Header(){
    return(
        <header>
            <img src={logo} className="logo"></img>
            <ul className="sections">
                <a href="#home"><li>HOME</li></a>
                <a href="#about"><li>ABOUT</li></a>
                <a href="#skills"><li>SKILLS</li></a>
                <a href="#projects"><li>PROJECTS</li></a>
            </ul>
            <Contact />
        </header>
    );
}


export default Header