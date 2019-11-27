import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  //start here with your code for step one
state = {
  bots: [],
  army: []
}




  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r=> r.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  addBot = (bot) => {
    if(!this.state.army.includes(bot)){
    this.setState({
      army: [...this.state.army, bot]
    })
  }
  }

  removeBot = (bot) => {
    this.setState({
      army: [...this.state.army].filter(army => army.id !== bot.id)
    })
  }
  
  




  render() {
   
    return (
      <div>
        <YourBotArmy removeBot={this.removeBot} army={this.state.army} />
       <BotCollection addBot={this.addBot}  bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
