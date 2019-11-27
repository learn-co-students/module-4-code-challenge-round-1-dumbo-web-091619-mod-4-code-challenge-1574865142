import React from "react";
import BotCard from "../components/BotCard";

// made this a functional component, as it's not doing any state work
const BotCollection = (props) => {
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{/* iterates over allBots and renders a BotCard for each, passing needed funcs as props */}
    		  {props.allBots.map(bot => {
				 return < BotCard bot={bot} key={bot.id} selectABot={props.selectABot} backToPage={props.backToPage}/>
			  })}
    		</div>
  	  </div>
  	);
};

export default BotCollection;
