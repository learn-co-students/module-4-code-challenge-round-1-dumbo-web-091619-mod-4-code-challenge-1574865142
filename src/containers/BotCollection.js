import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){

	  const renderedBots = this.props.bots.map((bot) => {
		  return (
			  <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick} />
		  )
	  })
  	return (
	<div>
     <h1 style={{textAlign: "center"}}>Bot Collection</h1>
  	  <div className="ui four column grid">
    		<div className="row">
    		  {renderedBots}
    		</div>
  	  </div>
	</div>
  	);
  }

};

export default BotCollection;
