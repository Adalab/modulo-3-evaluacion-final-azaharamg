import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../stylesheet/CharacterCard.scss";

const speciesIcon = species => {
  if (species === "Humanoid") {
    return "fas fa-robot";
  } else if (species === "Alien") {
    return "fab fa-reddit-alien";
  } else if (species === "Animal") {
    return "fas fa-paw";
  } else if (species === "Human") {
    return "fas fa-male";
  }
};

function CharacterCard(props) {
  const { id, image, name, species } = props.characterItem;
  return (
    <Link className="list__item--link" to={`/character/${id}`}>
      <img className="list__item--img" src={image} alt={`character ${name}`} />
      <h3 className="list__item--title">{name}</h3>
      <p>
        <i className={`list__item--paragraph ${speciesIcon(species)}`} title="species"></i>
        {species === "Vampire" ? `It is a ${species} !!!` : species}
      </p>
    </Link>
  );
}

CharacterCard.propTypes = {
  characterItem: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string
  }).isRequired
};

export default CharacterCard;
