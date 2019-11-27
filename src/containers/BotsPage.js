import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    myBots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(data => {this.setState({bots: data})})
  }

  handleClick = (bot) => {
    if (this.state.myBots.includes(bot)){
      null
    }
    else {
      this.setState({
        myBots: [...this.state.myBots, bot]
      })
    }
  }

  removeBot = (bot) => {
    this.setState({
      myBots: [...this.state.myBots.filter(myBot => myBot !== bot)]
    })
  }


  render() {

    return (
      <div>
        {<YourBotArmy
          removeBot={this.removeBot}
          myBots={this.state.myBots}/>}
        {<BotCollection
          bots={this.state.bots}
          handleClick={this.handleClick}
          />}
      </div>
    );
  }

}

export default BotsPage;
