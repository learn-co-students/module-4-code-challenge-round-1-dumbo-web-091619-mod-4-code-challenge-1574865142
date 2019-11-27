import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  
  state = {
    bots: [],
    botsArmy: []
  }
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(botsData => 
      this.setState({
        bots: botsData
      }) )
    }

  

   addToArmy = (addedBot) => {
      this.setState((currentState) => {
      return { botsArmy: [...currentState.botsArmy ,addedBot] }
      })   
    }

    removeFromArmy() {
      console.log('Hi Graham and Otha! Ran outta time!')
    }


    
    render() {
      return (
      <div>
      <YourBotArmy botsArmy={this.state.botsArmy} removeFromArmy={this.removeFromArmy}  />
      <BotCollection bots={this.state.bots} addToArmy={this.addToArmy} />
      </div>
    );
  }

}

export default BotsPage;
