import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import axios from 'axios'


class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props) {
	  super(props)
  
	  this.state = {
		   allBots: []
	  }
  }


  componentDidMount(){
	  axios.get('https://bot-battler-api.herokuapp.com/api/v1/bots')
	  .then(r =>{
		this.setState({
			allBots: r.data
		})
	  })
  }

  render() {
    // console.log(this.state.allBots)
    return (
      <div>
        <YourBotArmy />
        <BotCollection allBots={this.state.allBots}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
