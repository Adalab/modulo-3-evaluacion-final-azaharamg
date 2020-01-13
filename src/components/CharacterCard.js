import React from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  const { id, image, name, species } = props.characterItem;
  return (
    <Link to={`/character/${id}`}>
      <img src={image} alt={`character ${name}`} />
      <h2>{name}</h2>
      <p>{species}</p>
    </Link>
  );
}

export default CharacterCard;
