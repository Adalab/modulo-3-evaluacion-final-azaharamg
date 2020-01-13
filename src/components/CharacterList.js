import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <ul>
      {props.filteredBySearch.map(characterItem => (
        <li>
          <CharacterCard key={characterItem.id} characterItem={characterItem} />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
