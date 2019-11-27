import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state ={
    bots: [],
    army: []
  }

  getBots = () => {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  addToArmy = (bot) => {
    this.setState({
      army: [...this.state.army, bot]
    })
  }

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} army={this.state.army} addToArmy ={this.addToArmy}/>
      </div>
    );
  }

  componentDidMount = () => {
    this.getBots()
  }
}

export default App;
