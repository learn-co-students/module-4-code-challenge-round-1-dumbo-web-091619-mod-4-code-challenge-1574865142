import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {


  state = {
    specBot: false
  }


  render(){

    const botsArray = this.props.bots.map(bot => {
          return <BotCard
          handleClick={this.props.handleClick}
          bot={bot}
          key={bot.id}/>
      })

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botsArray}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
