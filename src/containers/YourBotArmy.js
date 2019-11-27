import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  render(){
    // console.log(this.props.removeBotFromArmy);
    const botsInArmy = this.props.botArmy.map(bot => <BotCard bot={bot} key={bot.id} addBotToArmy={ this.props.addBotToArmy } removeBotFromArmy={ this.props.removeBotFromArmy }/>)
    
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            { botsInArmy }
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
