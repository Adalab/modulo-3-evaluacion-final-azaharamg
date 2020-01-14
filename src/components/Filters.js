import React from "react";
import "../stylesheet/Filters.scss";
import PropTypes from "prop-types";

function Filters(props) {
  const handleSubmit = event => {
    event.preventDefault();
  };
  const handleSearch = event => {
    const searchText = event.target.value.toLowerCase();
    props.handleSearch(searchText);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
