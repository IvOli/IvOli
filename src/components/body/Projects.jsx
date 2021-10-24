import React from 'react';
import Card from "./Card";
// import proyectos from "./proyectos.json";

// console.log(proyectos)
//Esto ya incluye el parse

const proyectos = require("./proyectos.json"); 
// console.log(proyectos)
let proyect = proyectos.proyectos
function createProyect(item) {
    return (
      <Card
        key={item.id}
        name={item.name}
        url={item.url}
        code={item.code}
        info={item.info}
        img={item.pic}
      />
    );
  }

function Projects(){
    
    // console.log(proyect)
    // proyect.map((item)=> console.log(item.url))

    return (
      <div class="cuadrogrande">
        {proyect.map(createProyect)}
      </div>
    );
}

export default Projects
