import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state ={
    bots: [],
    army: [],
    clicked: false,
    botSpec: {}
  }

  handleClick = (bot) => {
    this.setState({
      clicked: true,
      botSpec: bot
    })
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
        <BotsPage bots={this.state.bots} bot={this.state.botSpec} army={this.state.army} clicked={this.state.clicked} addToArmy ={this.addToArmy} handleClick={this.handleClick}/>
      </div>
    );
  }

  componentDidMount = () => {
    this.getBots()
  }
}

export default App;
