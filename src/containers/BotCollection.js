import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  
  render(){
	const bots = this.props.bots.map( bot =>
		<BotCard  bot={bot} key={bot.id} enlistBot={this.props.enlistBot} />
	)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  <h3> Collection of all bots </h3>
    		  {bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
