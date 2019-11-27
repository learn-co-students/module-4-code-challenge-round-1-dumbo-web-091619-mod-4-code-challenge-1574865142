import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
	let  allBots = this.props.bot
	console.log(allBots)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/*...and here..*/}
    		  Collection of all bots
			  {/* <BotCard /> */}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
