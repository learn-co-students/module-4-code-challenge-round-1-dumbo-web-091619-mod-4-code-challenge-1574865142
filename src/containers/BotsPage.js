import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    myBots: []
  }

   componentDidMount = async () => {
     let rawBots = await fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
     let bots = await rawBots.json()
     this.setState({
       allBots: bots
     })
   }

   enlistBot = (selectedBot) => {
    this.setState({
      myBots: [...this.state.myBots, selectedBot]
    })
   }

   removeBot = (selectedBot) => {
     let filteredBots = this.state.myBots.filter(bot => {
       return bot.id !== selectedBot.id
     })
     this.setState({
       myBots: filteredBots
     })
   }

   addOrRemoveBot = (selectedBot) => {
     if(!this.state.myBots.includes(selectedBot)){
       this.enlistBot(selectedBot)
     } else {
       this.removeBot(selectedBot)
     }
   }

  render() {
    return (
      <div>
       <YourBotArmy myBots={this.state.myBots} addOrRemoveBot={this.addOrRemoveBot}/>
       <BotCollection allBots={this.state.allBots} addOrRemoveBot={this.addOrRemoveBot}/>
      </div>
    );
  }

}

export default BotsPage;
