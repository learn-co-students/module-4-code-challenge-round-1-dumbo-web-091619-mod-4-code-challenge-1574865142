import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  
 state = {
   bots: [],
   botArmy: []
 }

 handleClick = (botToClick) => {
  if(this.state.botArmy.sort(bot => bot.id !== botToClick.id))
  {this.setState({
    botArmy: [...this.state.botArmy, botToClick]
   })}
 }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })  
  }
  
  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} botArmy={this.state.botArmy} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
