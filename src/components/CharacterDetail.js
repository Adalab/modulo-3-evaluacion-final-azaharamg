import React from "react";
import "../stylesheet/CharacterDetail.scss";

function CharacterDetail(props) {
  const { image, name, species, location, episode, status } = props.selectedCharacter;
  return (
    <main className="main">
      <section className="section">
        <img className="section__img" src={image} alt={`Character ${name}`} />
        <div className="section__container">
          <h2 className="section__title">{name}</h2>
          <ul className="section__list">
            <li className="section__list--item">
              <strong>Status:</strong> {status}
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

export default CharacterDetail;
