import React from "react";
import foto from "../../img/foto.png"

function About(){
    return(
        <div className="about" id="about">
            <h3>ABOUT ME</h3>
            <div className="datos">
                <img src="https://i.ibb.co/hMChLD3/profile.jpg" alt="profile" className="profile-pic"/>
                <div className="titulo-contexto">
                    <h4>I am passionate about technology.</h4>
                    <p>I have worked doing websites in the front end with HTML5, CSS3, JavaScript, and React, and in the back end with the Python frameworks, Flask and FastAPI.</p>
                </div>
            </div>
        </div>
    )
}

export default About