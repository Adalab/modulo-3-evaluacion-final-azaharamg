import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <ul>
      {props.filteredBySearch.map(characterItem => (
        <li key={characterItem.id}>
          <CharacterCard characterItem={characterItem} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
