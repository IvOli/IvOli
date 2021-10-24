import React from "react";
import linkedin from "../../img/linkedin.png"
import github from "../../img/github.png"
import twitter from "../../img/twitter.png"

function SocialNetworks(){
    return (
        <div className="social">
            <a href="https://www.linkedin.com/in/olivadavid/" target="_blank"><img src={linkedin}></img></a>
            <a href="https://github.com/IvOli/" target="_blank"><img src={github}></img></a>
            <a href="https://twitter.com/DivOliva" target="_blank"><img src={twitter}></img></a>
        </div>
    );
}

export default SocialNetworks