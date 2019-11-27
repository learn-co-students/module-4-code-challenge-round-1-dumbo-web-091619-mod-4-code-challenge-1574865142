import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"

class BotsPage extends React.Component {

    state = {
      bots:[]
    }

  //start here with your code for step one
    componentDidMount(){
      fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res=>res.json())
      .then(botsArray => 
        // console.log(botsArray)
      this.setState({
          bots: botsArray
          })
      )
  }

  render() {
    const { bots } = this.state
    console.log("assigned to var post state", bots)
    return (
      <div>
        {/* put your components here */}
        < YourBotArmy />
        < BotCollection bots={bots}/>
      </div>
    );
  }

}

export default BotsPage;
