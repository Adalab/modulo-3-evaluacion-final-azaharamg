import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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

CharacterCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string
};

export default CharacterCard;
