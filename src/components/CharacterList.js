import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  return (
    <ul>
      {props.filteredBySearch.map(characterItem => {
        return <CharacterCard key={characterItem.id} characterItem={characterItem} />;
      })}
    </ul>
  );
}

export default CharacterList;
