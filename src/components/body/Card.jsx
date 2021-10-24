import React from "react";

function Card(props) {
  return (
    <div>
      <div className="cuadro">
        <div className="info">
          <h3>{props.name}</h3>
          <div class="img">
            <img src={props.img} alt="" />
          </div>
          <p>{props.info}</p>
        </div>
        <div className="buttons">
          <a href={props.url} target="_blank">URL</a>
          <a href={props.code} target="_blank">CODE</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
