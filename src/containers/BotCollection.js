import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
	  const allBots = this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} />)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{ allBots }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
