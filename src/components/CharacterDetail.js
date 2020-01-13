import React from "react";

function CharacterDetail(props) {
  const { image, name, species, location, episode, status } = props.selectedCharacter;
  return (
    <section>
      <img src={image} alt={`Character ${name}`} />
      <h2>{name}</h2>
      <ul>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Origin: {location.name}</li>
        <li>Episodes: {episode.length}</li>
      </ul>
    </section>
  );
}

export default CharacterDetail;
