import React from 'react';
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    yourBots: []
  }

  updateYourBots = (bot, toAdd) => {
    const { yourBots } = this.state
    let updatedBots = [] 
    if (toAdd) {
      if(yourBots.includes(bot)) return 
      updatedBots = [...yourBots, bot]
    } else {
      updatedBots = yourBots.filter(currentBot => currentBot.id !== bot.id)
    }
    this.setState({
      yourBots: updatedBots
    })
  }

  componentDidMount () {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots') //eslint-disable-line
      .then(response => response.json())
      .then(bots => this.setState({ bots }))  
  }

  render () {
    const { bots, yourBots } = this.state
    return (
      <div>
        <YourBotArmy bots={yourBots} updateYourBots={this.updateYourBots} /> 
        <BotCollection bots={bots} updateYourBots={this.updateYourBots} />
      </div>
    )
  }
}

export default BotsPage
