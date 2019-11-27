import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  

  render() {
    const allRobots = this.props.bot.map((robot) => <BotCard bot={robot} key={robot.id} isAdding={false} handleClick={this.props.handleClick}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {allRobots}
            {/*<BotCard bot={this.state.botArmy}/>*/}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
