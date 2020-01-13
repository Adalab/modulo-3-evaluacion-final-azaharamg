import React from "react";
import { Switch, Route } from "react-router-dom";
import getData from "../services/api.js";
import "../stylesheet/App.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchText: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }

  componentDidMount() {
    getData().then(data => this.setState({ results: data.results }));
  }

  handleSearch(searchText) {
    this.setState({ searchText });
  }

  filteredBySearch() {
    return this.state.results.filter(character => {
      return character.name.toLowerCase().includes(this.state.searchText);
    });
  }

  renderCharacterDetail(props) {
    const routeId = parseInt(props.match.params.id);
    const selectedCharacter = this.state.results.find(character => character.id === routeId);
    if (selectedCharacter !== undefined) {
      return <CharacterDetail selectedCharacter={selectedCharacter} />;
    }
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h1>Rick and Morty</h1>
            <Filters handleSearch={this.handleSearch} />
            <CharacterList filteredBySearch={this.filteredBySearch()} />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
