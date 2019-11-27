import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  
  
  state = {
    robots: [],
    isClicked: false,
    botArmy: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => this.setState({
      robots: data
    }))
}
  

   handleClick = (botObj, isAdding) => {
     if (isAdding) {
       this.setState({
         botArmy: [...this.state.botArmy, botObj]
 
       })
     } else {
       this.setState({
         botArmy: this.state.botArmy.filter(bot => bot.id !== botObj.id)
       })
     }
    

  }

  render() {
    
    return (
      <div>
        <YourBotArmy bot={this.state.botArmy} handleClick={this.handleClick} clicked={this.state} />
        <BotCollection robots={this.state.robots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
