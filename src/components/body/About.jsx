import React from "react";
import foto from "../../img/foto.png"

function About(){
    return(
        <div className="about">
        <div id="about"></div>
            <h3>ABOUT ME</h3>
            <div className="datos">
                <img src="https://i.ibb.co/hMChLD3/profile.jpg" alt="profile" className="profile-pic"/>
                <div className="titulo-contexto">
                    {/* <h4>I am passionate about technology.</h4> */}
                    <p>Me apasiona aprender y usar nuevas tecnologías para convertir las ideas de mis clientes en productos funcionales que les aporten un gran valor. </p>
                    <p>Al haber trabajado en dos distintas profesiones y con el uso de tecnología en conjunto con mi background académico de Contador Público, he tenido la oportunidad de atender y comprender las necesidades de los clientes para convertirlas en requerimientos técnicos  y en conjunto con el área de desarrollo realizar productos de calidad. </p>
                </div>
            </div>
        </div>
    )
}

export default About