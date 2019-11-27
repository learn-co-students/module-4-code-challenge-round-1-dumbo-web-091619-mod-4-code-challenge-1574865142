import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  render(){

    const bots = this.props.myBots.map( bot =>
      <BotCard  bot={bot} key={bot.id} dischargeBot={this.props.dischargeBot} />
    )

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
