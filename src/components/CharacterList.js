import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  //console.log(props.results);
  return (
    <ul>
      {props.results.map(characterItem => {
        return <CharacterCard key={characterItem.id} characterItem={characterItem} />;
      })}
    </ul>
  );
}

export default CharacterList;
