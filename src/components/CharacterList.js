import React from "react";
import "../stylesheet/CharacterList.scss";
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

export default CharacterList;
