import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: [],
    viewCollection: true,
    selectedBot: {}
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

  enlistBot = (bot) => {
    if(!this.state.botArmy.includes(bot)){
      this.setState({
        botArmy: [...this.state.botArmy, bot],
        viewCollection: true
      })
    } else {
      alert("This bot is already in your army!")
    }
  }

  showCollection = () => {
    this.setState({
      viewCollection: true
    })
  }

  handleCollectionClick = (bot) => {
    this.setState({
      viewCollection: false,
      selectedBot: bot
    })
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
    const botCollection = <BotCollection bots={this.state.bots} handleClick={this.handleCollectionClick} />
    const botSpecs = <BotSpecs bot={this.state.selectedBot} enlistBot={this.enlistBot} showCollection={this.showCollection} enlisted={this.state.enlisted}/>

    return (
      <div>
        <YourBotArmy bots={this.state.botArmy} handleClick={this.handleArmyClick} />
        {this.state.viewCollection ? botCollection : botSpecs}
      </div>
    );
  }

}

export default BotsPage;
