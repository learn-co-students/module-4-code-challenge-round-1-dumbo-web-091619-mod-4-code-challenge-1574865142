import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => {
      this.setState({
        bots
      })
    })
  }

  addBotToArmy = (botYouClickedOn) => {
    this.setState({
      botArmy: [...this.state.botArmy, botYouClickedOn]
    })
  }

  removeBotFromArmy = (botYouClickedOnInArmy) => {
    this.setState({
      botArmy: this.state.botArmy.filter(botInArmy => botInArmy.id !== botYouClickedOnInArmy.id)
    })
  }
  

  render() {
    return (
      <div>
        <BotCollection bots={ this.state.bots }/>
        <YourBotArmy botArmy={ this.state.botArmy } addBotToArmy={ this.addBotToArmy } removeBotFromArmy={ this.removeBotFromArmy }/>
      </div>
    );
  }

}

export default BotsPage;
