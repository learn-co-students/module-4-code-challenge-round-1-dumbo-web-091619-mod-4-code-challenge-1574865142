import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
  //your code here

  
  

  render(){
	  console.log(this.props.allBots)
	  let allBots= this.props.map
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{/* {allBots.map( bot => {
					// <BotCard bot={this.bot} />
				})} */}
				{/* <BotCard /> */}
    		  {/*...and here..*/}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
