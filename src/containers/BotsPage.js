import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        <YourBotArmy army={this.props.army}/>
        {(!this.props.clicked) ? (<BotCollection bots={this.props.bots} clicked={this.props.clicked} addToArmy={this.props.addToArmy} handleClick={this.props.handleClick}/>) : (<BotSpecs bot={this.props.bot} clicked={this.props.clicked} addToArmy={this.props.addToArmy}/>)}       
      </div>
    );
  }

}

export default BotsPage;
