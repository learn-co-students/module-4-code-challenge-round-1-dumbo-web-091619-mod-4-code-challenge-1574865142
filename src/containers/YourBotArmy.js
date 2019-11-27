import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  renderBots = () => {
    const transArr = this.props.bots.map((el) => <BotCard key={el.id} bot={el} showSpecs={this.props.addToArmy}/>)
    return transArr;
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
