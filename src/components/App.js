import React from "react";
import "../stylesheet/App.scss";
import getData from "../services/api.js";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchText: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.filteredBySearch = this.filteredBySearch.bind(this);
  }

  handleSearch(searchText) {
    this.setState({ searchText: searchText.toLowerCase() });
  }

  filteredBySearch() {
    return this.state.results.filter(character => {
      return character.name.toLowerCase().includes(this.state.searchText);
    });
  }

  componentDidMount() {
    getData().then(data => this.setState({ results: data.results }));
  }

  render() {
    return (
      <div className="App">
        <h1>Rick and Morty</h1>
        <Filters handleSearch={this.handleSearch} />
        <CharacterList filteredBySearch={this.filteredBySearch()} />
      </div>
    );
  }
}

export default App;
