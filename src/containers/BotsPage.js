import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  // set initial state
  state = {
    // stores BotCollection bots
    allBots: [],
    // stores YourBotArmy bots
    myBots: [],
    // BotSpecs render trigger
    botSelected: false,
    // BotSpecs bot
    currentBot: null
  }

  // get those bots 🤖🤖🤖
   componentDidMount = async () => {
     let rawBots = await fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
     let bots = await rawBots.json()
     this.setState({
       allBots: bots
     })
     console.log("Welcome to 🤖 __Bot Battlr__ 🤖")
   }

   // helper!
   // add bot to state.myBots
   enlistBot = (selectedBot) => {
    this.setState({
      myBots: [...this.state.myBots, selectedBot]
    })
   }

   // helper!
   // remove bot from state.myBots
   removeBot = (selectedBot) => {
     let filteredBots = this.state.myBots.filter(bot => {
       return bot.id !== selectedBot.id
     })
     this.setState({
       myBots: filteredBots
     })
   }

   // conditionally add / remove bot my state.myBots
   addOrRemoveBot = (selectedBot) => {
    if(!this.state.myBots.includes(selectedBot)){
      this.enlistBot(selectedBot)
    } else {
      this.removeBot(selectedBot)
    }
  }

  // conditionally returns "Enlist" or "Remove" strings
  enlistOrRemoveButtonText = (selectedBot) => {
    if(!this.state.myBots.includes(selectedBot)){
      return "Enlist"
    } else {
      return "Remove"
    }
  }
 
  // toggle state.botSelected boolean
  // &
  // assign bot object to state.currentBot
  selectABot = (currentBot) => {
    this.setState({
      botSelected: true,
      currentBot
    })
  }

  // resets state.botSelected & state.currentBot
  backToPage = () => {
    this.setState({
      botSelected: false,
      currentBot: null
    })
  }

  // conditional render of either <YourBotArmy /> or <BotSpecs />
  // controlled by state.botSelected boolean
  renderArmyOrSpecs = () => {
    if(this.state.botSelected){
      return <BotSpecs bot={this.state.currentBot} addOrRemoveBot={this.addOrRemoveBot} enlistOrRemoveButtonText={this.enlistOrRemoveButtonText} backToPage={this.backToPage}/>
    } else {
      return <YourBotArmy myBots={this.state.myBots} selectABot={this.selectABot}/>
    }
  }

  render() {
    return (
      <div>
        {/* render _either_ <YourBotArmy /> or <BotSpecs /> */}
        {this.renderArmyOrSpecs()}
        {/* render <BotCollection /> */}
       <BotCollection allBots={this.state.allBots} selectABot={this.selectABot} backToPage={this.backToPage}/>
      </div>
    );
  }

}

export default BotsPage;
