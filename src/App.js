//I could add a bot to the army
//
// I could remove a bot from the army
//
// I could prevent duplicate additions using state
//
// but I couldnt figure out how to flip the state of the card in Bot Collection back to 'false
// so it could be readded to the army
//
// I tried a bunch of different things but I could not get a state change to trigger when clicking
// on a card in YourBotArmy
//
// I knew what I had to do with the state, but couldnt figure out how to do it

import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import YourBotArmy from './containers/YourBotArmy'
import "./App.css";

export default class App extends Component {

  state = {
    bots: [],
    displayBots: [],
    bot: [],
    botArmy: [],
    // removedBot: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(res_obj =>
      this.setState({
        bots: res_obj,
        displayBots: res_obj
      })
    )
  }

  addBot = (bot) => {
    this.setState({
      botArmy: [...this.state.botArmy, bot],
      bot: bot
    })
  }

  removeBot = (botToRemove) => {
    const filteredBots = this.state.botArmy.filter(bot =>
      bot.id !== botToRemove.id
    )

    this.setState({
      botArmy: filteredBots,
      // removedBot: botToRemove
    })
  }

  render() {

    // console.log(this.addBot)
    
    return (
      <div className="App">
        <YourBotArmy
          bot={this.state.bot}
          botArmy={this.state.botArmy}
          removeBot={this.removeBot}
        />
        <BotsPage
          displayBots={this.state.displayBots}
          addBot={this.addBot}
          // removedBot={this.state.removedBot}
         />
      </div>
    );
  }
}
