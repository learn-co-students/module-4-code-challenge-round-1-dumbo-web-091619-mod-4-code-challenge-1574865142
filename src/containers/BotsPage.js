import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import axios from 'axios'
import BotSpecs from '../components/BotSpecs'
import { throws } from "assert";


class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props) {
	  super(props)
  
	  this.state = {
       allBots: [],
       selectedBots: [],
       botChosen: false
	  }
  }


  componentDidMount(){
	  axios.get('https://bot-battler-api.herokuapp.com/api/v1/bots')
	  .then(r =>{
		this.setState({
			allBots: r.data
    })
    //iterate through r.data and set the state for individual bot to botChosen: false, 
	  })
  }

  selectedBotFxn = (currentBot) => {
    // console.log(currentBot)
    this.setState({
      botChosen: true,
      selectedBots: [currentBot, ...this.state.selectedBots]
    })
  }

  renderBot = (theBotIChose) =>{
    if(!this.state.selectedBots.includes(theBotIChose)){
      this.selectedBotFxn(theBotIChose)
    }
  }

  removeABotFromMyArmy = (botToBeRemoved) =>{

    let newMybot = this.state.selectedBots.filter(bot => {
     return bot.id !== botToBeRemoved.id
    })
    this.setState({
      selectedBots: newMybot
    })
  }

  

  handleClicked(){
    console.log('clicked')
  }

  render() {
    return (
      <div>
        <YourBotArmy choseBots={this.state.selectedBots} removeBot={this.removeABotFromMyArmy}/>

        <BotCollection allBots={this.state.allBots} renderBot={this.renderBot}/>
       
      </div>
    );
  }

}

export default BotsPage;
