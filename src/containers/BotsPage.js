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
    sortBy: 'all',
    filterBy: ''
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
  
  updateSortBy = (sortBy) => sortBy !== this.state.sortBy ? this.setState({ sortBy, bot: null, filterBy: '' }) : null

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

  changeFilterBy = (filterBy) => this.setState({ filterBy })
  filterBots = (bots) => bots.filter(bot => bot.name.toLowerCase().replace('-', '').includes(this.state.filterBy))

  componentDidMount () {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots') //eslint-disable-line
      .then(response => response.json())
      .then(bots => this.setState({ bots }))  
  }

  render () {
    const { yourBots, bot, sortBy, filterBy } = this.state
    let bots = this.sortedBots()
    bots = this.filterBots(bots)
    return (
      <div>
        <YourBotArmy bots={yourBots} updateYourBots={this.updateYourBots} /> 
        <SortBar sortBy={sortBy} updateSortBy={this.updateSortBy} filterBy={filterBy} changeFilterBy={this.changeFilterBy}/>
        {bot ? <BotSpecs bot={bot} viewBotsSpecs={this.viewBotsSpecs} updateYourBots={this.updateYourBots} /> : <BotCollection bots={bots} viewBotsSpecs={this.viewBotsSpecs} />}
      </div>
    )
  }
}

export default BotsPage
