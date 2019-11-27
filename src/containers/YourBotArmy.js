import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){

    const robotCards = this.props.army.map(robot => <BotCard key={robot.id} bot={robot} removeFromArmy={this.props.removeFromArmy}/>)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {robotCards}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
