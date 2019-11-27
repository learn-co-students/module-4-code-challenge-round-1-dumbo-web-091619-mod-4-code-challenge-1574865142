import React from "react"
import BotCard from "../components/BotCard"
import Search from '../components/Search'

class BotCollection extends React.Component {

  render(){

	const robotCards = this.props.allRobots.map(robot => 
		<BotCard key={robot.id} bot={robot} showSpecs={this.props.showSpecs}/>)

  	return (
  	  <div className="ui four column grid">
		<div className="row">
			Collection of all bots
			<div>
				<Search filterBots={this.props.filterBots}/>
			</div>
			{robotCards}
		</div>
  	  </div>
  	)
  }

}

export default BotCollection
