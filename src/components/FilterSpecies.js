import React from "react";

function FilterSpecies(props) {
  const handleSpecies = event => {
    const searchSpecies = event.target.value;
    props.handleSpecies(searchSpecies);
  };

  const species = props.results.map(result => result.species);
  let fileteredSpecies = [...new Set(species)];

  return (
    <form className="form">
      <select onChange={handleSpecies}>
        <option defaultValue={props.value}>{props.value}</option>
        {fileteredSpecies.map(species => (
          <option key={species} value={species}>
            {species}
          </option>
        ))}
      </select>
      />
    </form>
  );
}

export default FilterSpecies;
