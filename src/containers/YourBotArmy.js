import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const renderedBots = this.props.bots.map((bot) => {
      return (
        <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick} />
      )
    })
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {renderedBots}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
