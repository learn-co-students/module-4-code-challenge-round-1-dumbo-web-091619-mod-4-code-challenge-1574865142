import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {
	//your code here
	
	//code here needs to do something like:
	//if card is clicked, replace the bot collection with info page
	//else just show all bot cards (collection)

  render(){
  	return (
			<div>



				{/* if (include function that just shows the entire bot collection) */}
				{/* meaning, do the following below */}
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => {
						return <BotCard key={bot.id} bot={bot} addToArmy={this.props.addToArmy}/>
					})}
    		  Collection of all bots
    		</div>
  	  </div>



			{/* else render the <BotSpecs /> showing the info of the one bot */}
			{/* //If i got the above code to work then I would need to pass the addToArmy and removeFrom Army props through here to get to the botSpecs */}

			</div>
  	);
  }

};

export default BotCollection;
