import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
   
  state = {
    isClicked: false,
    botArmy: []
  }

  // displayBot = () => {
    
  // }
  

   handleClick = (id) => {
     console.log('clicked')
     console.log(id)
     this.setState({
      //  isClicked: !this.state.isClicked,

     })
  }

  render() {
    const allRobots = this.props.robots.map((robot) => <BotCollection robot={robot} key={robot.id} handleClick={this.handleClick}/>)
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} clicked={this.state}/>
        {allRobots}
      </div>
    );
  }

}

export default BotsPage;
