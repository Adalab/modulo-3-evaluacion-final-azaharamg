import React from "react";
import "../stylesheet/App.scss";
import getData from "../services/api.js";
import CharacterList from "./CharacterList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    getData().then(data => this.setState({ results: data.results }));
  }

  render() {
    //console.log(this.state.results);

    return (
      <div className="App">
        <CharacterList results={this.state.results} />
      </div>
    );
  }
}

export default App;
