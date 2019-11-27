import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	render () {
		const { bots, updateYourBots } = this.props
		return (
			<div className="ui four column grid">
				<div className="row">
					{bots.map(bot => <BotCard key={bot.id} bot={bot} updateYourBots={updateYourBots} toAdd={true}/>)}
					Collection of all bots
				</div>
			</div>
		)
	}

};

export default BotCollection;
