import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  constructor(props) {
      super(props)
      this.state ={
        bots: this.props.botsData
      }
  }

  bots = () => {
  return this.props.botsData.map(bot => {
   console.log(bot)
  })
}


  render(){

    console.log(this.state.bots)
    // I can get the data but I can't do anything with it. when i try to map it says that the data is null and can't be mapped. I also can't set the data to state and access it that way as I also get null. Can't get on the problem.

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
