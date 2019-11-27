import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(bots => {
      this.setState({
        bots: bots
      })
    })
  }

  handleCollectionClick = (bot) => {
    if(!this.state.botArmy.includes(bot)){
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      })
    } else {
      alert("This bot is already in your army!")
    }
  }

  handleArmyClick = (bot) => {
    const newBots = this.state.botArmy.filter((eachBot) => {
      return eachBot !== bot
    })
    this.setState({
      botArmy: newBots
    })
  }

  render() {


    return (
      <div>
        <YourBotArmy bots={this.state.botArmy} handleClick={this.handleArmyClick} />
        <BotCollection bots={this.state.bots} handleClick={this.handleCollectionClick}/>
      </div>
    );
  }

}

export default BotsPage;
