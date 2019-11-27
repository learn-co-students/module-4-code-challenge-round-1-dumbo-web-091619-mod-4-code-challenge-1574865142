import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/* {this.props.bots.map(bot =><BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick}/>)} */}
    		  {this.props.bots.map(bot => <BotSpecs bot={bot} key={bot.id} handleClick={this.props.handleClick} />)}
			  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
