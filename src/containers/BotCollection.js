import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

	render() {
		const allRobots = this.props.robots.map((robot) => <BotCard bot={robot} key={robot.id} handleClick={this.props.handleClick} isAdding={true}/>)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {allRobots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
