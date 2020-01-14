import React from "react";
import "../stylesheet/Filters.scss";
import PropTypes from "prop-types";

function Filters(props) {
  const handleSearch = event => {
    const searchText = event.target.value.toLowerCase();
    props.handleSearch(searchText);
  };

  return (
    <form className="form">
      <input
        className="form__searchBar"
        type="text"
        name="searchText"
        id="searchText"
        placeholder="Search your favourite..."
        value={props.value}
        onChange={handleSearch}
      />
    </form>
  );
}

Filters.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Filters;
