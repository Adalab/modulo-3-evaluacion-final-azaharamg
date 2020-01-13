import React from "react";

function CharacterCard(props) {
  //console.log(props.characterItem);
  const { image, name, species } = props.characterItem;
  return (
    <li>
      <img src={image} alt={`character ${name}`} />
      <h2>{name}</h2>
      <p>{species}</p>
    </li>
  );
}

export default CharacterCard;
