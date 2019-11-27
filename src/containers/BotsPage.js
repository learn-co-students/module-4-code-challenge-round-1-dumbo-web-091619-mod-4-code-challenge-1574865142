import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    robots: [],
    army: [],
    clicked: false,
    showBot: {},
    showRobots: []
  }
  
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(data => {
      this.setState({
        robots: data,
        showRobots: data
      })
    })
  }

  addToArmy = (bot) => {
    if (!this.state.army.includes(bot)) {
      this.setState({
        army: [...this.state.army, bot],
        showBot: {},
        clicked: false
      })
    }
  }

  removeFromArmy = (bot) => {
    if (this.state.army.includes(bot)) {
      this.setState({
        army: this.state.army.filter(robot => robot !== bot)
      })
    }
  }

  showSpecs = (bot) => {
    this.setState({
      showBot: bot,
      clicked: true
    })
  }

  goBack = () => {
    this.setState({
      showBot: {},
      clicked: false
    })
  }

  filterBots = (input) => {
    if (input === 'All') {
      this.setState({
        showRobots: this.state.robots
      })
    } else {
      this.setState({
        showRobots: this.state.robots.filter(bot => bot.bot_class === input)
      })
    }
  }

  render() {

    const collection = <BotCollection allRobots={this.state.showRobots} showSpecs={this.showSpecs} filterBots={this.filterBots}/>

    const specs = <BotSpecs bot={this.state.showBot} addToArmy={this.addToArmy} goBack={this.goBack}/>

    return (
      <div>
        <YourBotArmy army={this.state.army} removeFromArmy={this.removeFromArmy}/>
        {(this.state.clicked) ? (specs) : (collection)}
      </div>
    )
  }

}

export default BotsPage;
