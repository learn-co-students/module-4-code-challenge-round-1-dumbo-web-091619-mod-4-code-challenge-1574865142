import React from 'react';
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs';
import SortBar from './sortbar'
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    yourBots: [],
    bot: null,
    sortBy: 'all'
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
    this.setState({ yourBots: updatedBots })
  }

  viewBotsSpecs = (bot) => this.setState({ bot })
  
  updateSortBy = (sortBy) => sortBy !== this.state.sortBy ? this.setState({ sortBy, bot: null }) : null

  sortedBots = () => {
    const { sortBy, bots } = this.state
    const botsToSort = [...bots]

    if (sortBy === 'health') {
      return botsToSort.sort((botA, botB) => botB.health - botA.health )
    } else if (sortBy === 'damage') {
      return botsToSort.sort((botA, botB) => botB.damage - botA.damage )
    } else if (sortBy === 'armor') {
      return botsToSort.sort((botA, botB) => botB.armor - botA.armor )
    } else {
      return bots
    }
  }
  componentDidMount () {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots') //eslint-disable-line
      .then(response => response.json())
      .then(bots => this.setState({ bots }))  
  }

  render () {
    const { yourBots, bot, sortBy } = this.state
    const bots = this.sortedBots()
    return (
      <div>
        <YourBotArmy bots={yourBots} updateYourBots={this.updateYourBots} /> 
        <SortBar sortBy={sortBy} updateSortBy={this.updateSortBy} />
        {bot ? <BotSpecs bot={bot} viewBotsSpecs={this.viewBotsSpecs} updateYourBots={this.updateYourBots} /> : <BotCollection bots={bots} viewBotsSpecs={this.viewBotsSpecs} />}
      </div>
    )
  }
}

export default BotsPage
