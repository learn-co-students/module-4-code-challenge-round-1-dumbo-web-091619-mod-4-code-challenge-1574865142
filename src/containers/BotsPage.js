import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div className='botsPage'>
        <YourBotArmy />
        <BotCollection botsData={this.props.botsData}/>
      </div>
    );
  }

}

export default BotsPage;
