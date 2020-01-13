import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CharacterCard.scss";

function CharacterCard(props) {
  const { id, image, name, species } = props.characterItem;
  return (
    <Link className="list__item--link" to={`/character/${id}`}>
      <img className="list__item--img" src={image} alt={`character ${name}`} />
      <h3 className="list__item--title">{name}</h3>
      <p className="list__item--paragraph">{species}</p>
    </Link>
  );
}

export default CharacterCard;
