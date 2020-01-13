import React from "react";

function Filters(props) {
  const handleSearch = event => {
    const searchText = event.target.value.toLowerCase();
    props.handleSearch(searchText);
  };

  return (
    <form>
      <input type="text" name="searchText" id="searchText" onChange={handleSearch} />
    </form>
  );
}

export default Filters;
