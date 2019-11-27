import React from "react";
import BotCard from "../components/BotCard";
import { timingSafeEqual } from "crypto";


class YourBotArmy extends React.Component {
  //your bot army code here...
    

  render(){

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {this.props.choseBots.map( bot => {
					// console.log(bot)
				// return <BotCard renderBot={this.props.renderBot} bot={bot} />
        return <BotCard onBotClick={this.props.removeBot} bot={bot} />

				})}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
