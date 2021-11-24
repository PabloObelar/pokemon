import React from "react";

function Pokedex({ id, name, image, type }) {
  const style = type + " thumb-container";
  return (
    <div className={style}>
      <div className="number">
        <smal>#0{id}</smal>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Tipo: {type}</small>
      </div>
    </div>
  );
}

export default Pokedex;
