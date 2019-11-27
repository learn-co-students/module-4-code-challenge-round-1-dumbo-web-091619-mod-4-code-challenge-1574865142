import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    permenantBots: [],
    bots:[],
    myBots: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(botsArr => {
        this.setState({
          permenantBots: botsArr,
          bots: botsArr
        })
    })
  }

  enlistBot = (addedBot) => {
    this.setState({
      myBots: [...this.state.myBots, addedBot],
      // bots: [...this.state.bots].filter(bot => bot !== addedBot)
    })
  }

  dischargeBot = (removedBot) => {
    this.setState({
      myBots: [...this.state.myBots].filter(bot => bot !== removedBot)
    })
  }

  render() {
    
    return (
      <div>
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot}/>
        <YourBotArmy myBots={this.state.myBots} dischargeBot={this.dischargeBot} />
      </div>
    );
  }

}

export default BotsPage;
