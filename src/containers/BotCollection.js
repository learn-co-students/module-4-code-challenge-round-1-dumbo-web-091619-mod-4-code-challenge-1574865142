import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = (props) => {

    const distributeBots = props.bots.map( bot =>
      <BotCard
	  	key={bot.id}
		bot={bot}
		addBot={props.addBot}
	    // removedBot={props.removedBot}
	  />
    )
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { distributeBots }
    		</div>
  	  </div>
  	);

};

export default BotCollection