import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  state = {
    botArmy: [],
    displayBot: false
  }

//   handleClick = (id) => {
//     console.log('clicked')
//     console.log(id)
//  }


  addBots = () => {
    if (this.props.clicked) {
      this.setState({
        // botArmy => that specific bot
      }) 
    }
  }
  

  render() {
    console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*return the state array of army*/}
            {/*<BotCard bot={this.state.botArmy}/>*/}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
