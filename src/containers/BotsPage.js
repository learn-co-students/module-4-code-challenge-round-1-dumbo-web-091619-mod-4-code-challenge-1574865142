import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"
class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.props.botArmy}/>
        <BotCollection handleClick={this.props.handleClick} bots={this.props.bots}/>
        
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
