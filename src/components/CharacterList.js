import React from "react";
import "../stylesheet/CharacterList.scss";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <ul className="list">
      {props.filteredBySearch.map(characterItem => (
        <li key={characterItem.id} className="list__item">
          <CharacterCard characterItem={characterItem} />
        </li>
      ))}
    </ul>
  );
}

CharacterList.propTypes = {
  filteredBySearch: PropTypes.array.isRequired
};

export default CharacterList;
