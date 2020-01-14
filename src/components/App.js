import React from "react";
import { Switch, Route } from "react-router-dom";
import getData from "../services/api.js";
import logo from "../images/logo.png";
import "../stylesheet/App.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import FilterSpecies from "./FilterSpecies";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchText: "",
      searchSpecies: "all"
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }

  componentDidMount() {
    getData().then(data => this.setState({ results: data.results }));
  }

  handleSearch(searchText) {
    this.setState({ searchText });
  }

  handleSpecies(searchSpecies) {
    this.setState({ searchSpecies });
  }

  filteredBySearch() {
    return (
      this.state.results
        .filter(character => {
          return character.name.toLowerCase().includes(this.state.searchText);
        })
        //Filtrar por especie
        .filter(character =>
          this.state.searchSpecies === "all" ? true : character.species === this.state.searchSpecies
        )
    );
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
      <div className="app">
        <header className="app__header">
          <img className="app__logo" src={logo} alt="logo" />
        </header>
        <main className="app__main">
          <Switch>
            <Route exact path="/">
              <FilterSpecies
                handleSpecies={this.handleSpecies}
                results={this.state.results}
                value={this.state.searchSpecies}
              />
              <Filters handleSearch={this.handleSearch} value={this.state.searchText} />
              <CharacterList filteredBySearch={this.filteredBySearch()} />
            </Route>
            <Route path="/character/:id" render={this.renderCharacterDetail} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
