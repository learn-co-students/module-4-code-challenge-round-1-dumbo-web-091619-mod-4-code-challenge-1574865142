import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

	render() {
	//   console.log(this.props.robot)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  <BotCard bot={this.props.robot} handleClick={this.props.handleClick} />
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
