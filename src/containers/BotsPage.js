import React from "react";
import BotContainer from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
  
  state ={
    bots: [],
    myArmy: [],
    botInfo: ""
  }

  //code below should  change the state and replace collection of bots with bot info page
  botInfo = (bot) => {
    this.setState({
      botInfo: bot
    })
  }

  addToArmy = (bot) => {
    if (!this.state.myArmy.includes(bot)) {
      this.setState({
        myArmy: [...this.state.myArmy, bot]
      })
    }
  }

  removeFromArmy = (bot) => {
    this.setState({
      myArmy: this.state.myArmy.filter(element => element !== bot)
    })
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  render() {
    return (
      <div>
        <BotContainer bots={this.state.bots} addToArmy={this.addToArmy} botInfo={this.botInfo}/>
        <YourBotArmy bots={this.state.myArmy} removeFromArmy={this.removeFromArmy}/>
      </div>
    );
  }

}

export default BotsPage;
