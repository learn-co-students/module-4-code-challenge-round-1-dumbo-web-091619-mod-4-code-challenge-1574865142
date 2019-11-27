import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js"

class BotsPage extends React.Component {
  constructor(){
    super();

    this.state = {
      bots: [],
    }
  }

  componentDidMount(){
    this.fetchBots()
  }

  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(r => {
      r.forEach(el => {
        this.setState({
          bots: [...this.state.bots, {...el, inArmy: false, showSpecs: false}]
        })
      })
    })
  }

  addToArmy = (bot) => {
    const newArr = this.state.bots.filter(el => el !== bot)
    this.setState({
      bots: [...newArr, {...bot, inArmy: !bot.inArmy}]
    })
  }

  showSpecs = (bot) => {
    const newArr = this.state.bots.filter(el => el !== bot)
    this.setState({
      bots: [...newArr, {...bot, showSpecs: !bot.showSpecs}]
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots.filter(el => el.inArmy)} addToArmy={this.addToArmy} />
        <BotCollection bots={this.state.bots.filter(el => !el.inArmy)} addToArmy={this.addToArmy}  />
      </div>
    );
  }

}

export default BotsPage;
