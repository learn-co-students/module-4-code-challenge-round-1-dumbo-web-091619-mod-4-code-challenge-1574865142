import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...



  render(){
    const myBotsArray = this.props.myBots.map(bot => {
        return <BotCard key={bot.id} handleClick={this.props.removeBot} bot={bot}/>
    })


    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {myBotsArray}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
