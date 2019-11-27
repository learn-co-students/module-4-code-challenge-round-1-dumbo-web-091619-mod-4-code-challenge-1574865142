import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {
    data: null,
  };
}

  componentDidMount() {
      fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }



  render() {
    return (
      <div className="App">
        <BotsPage botsData={this.state.data}/>
      </div>
    );
  }
}

export default App;
