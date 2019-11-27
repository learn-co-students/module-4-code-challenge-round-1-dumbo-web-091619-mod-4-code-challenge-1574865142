import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  
  render(){
	  let bots = this.props.bots
	  return (
		  <div className="ui four column grid">
		  {bots.map((bot)=> 
    		<div className="row">
    		  {/*...and here..*/}
		   < BotCard bot={bot} key={bot.id} />
    		  Collection of all bots
    		</div>
			)}
  	  </div>	
	  )
  }
};

export default BotCollection;
