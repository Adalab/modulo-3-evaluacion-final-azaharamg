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
    <section className="section">
      <Link className="section__link" to="/">
        <i className="fas fa-chevron-left" title="go back">
          Go Back
        </i>
      </Link>
      <article className="article">
        <img className="article__img" src={image} alt={`Character ${name}`} />
        <div className="article__container">
          <h2 className="article__title">{name}</h2>
          <ul className="article__list">
            <li className="article__list--item">
              <strong>Status: </strong>
              <i className={statusIcon(status)} title="status"></i>
            </li>
            <li className="article__list--item">
              <strong>Species: </strong> {species}
            </li>
            <li className="article__list--item">
              <strong>Origin: </strong>
              {location.name}
            </li>
            <li className="article__list--item">
              <strong>Episodes: </strong>
              {episode.length}
            </li>
          </ul>
        </div>
      </article>
    </section>
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
