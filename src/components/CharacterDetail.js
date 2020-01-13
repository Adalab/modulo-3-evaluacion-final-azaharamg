import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CharacterDetail.scss";
import PropTypes from "prop-types";

const statusIcon = status => {
  if (status === "Dead") {
    return "fas fa-skull-crossbones";
  } else if (status === "Alive") {
    return "fas fa-heartbeat";
  } else {
    return "far fa-question-circle";
  }
};

function CharacterDetail(props) {
  const { image, name, species, location, episode, status } = props.selectedCharacter;
  return (
    <main className="main">
      <Link className="main__link" to="/">
        <i className="fas fa-chevron-left"> Go Back</i>
      </Link>
      <section className="section">
        <img className="section__img" src={image} alt={`Character ${name}`} />
        <div className="section__container">
          <h2 className="section__title">{name}</h2>
          <ul className="section__list">
            <li className="section__list--item">
              <strong>Status:</strong>
              <i className={statusIcon(status)}>{status}</i>
            </li>
            <li className="section__list--item">
              <strong>Species:</strong> {species}
            </li>
            <li className="section__list--item">
              <strong>Origin:</strong>
              {location.name}
            </li>
            <li className="section__list--item">
              <strong>Episodes:</strong>
              {episode.length}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

CharacterDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  location: PropTypes.object,
  episode: PropTypes.array,
  status: PropTypes.string
};

export default CharacterDetail;

/*
'Dead'
'Alive'
'unknown'
*/
