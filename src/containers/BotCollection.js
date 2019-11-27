import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
  //your code here

  
  

  
  

  render(){
	//   console.log(this.props.allBots[0])
	  let allBots= this.props.allBots
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				Collection of all bots
				{allBots.map( bot => {
					// console.log(bot)
				return <BotCard onBotClick={this.props.renderBot} bot={bot} />
				})}
				
    		  {/*...and here..*/}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
