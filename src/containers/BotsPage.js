import React from "react";
// import BotCard from "../components/BotCard";
import BotCollection from "./BotCollection";


class BotsPage extends React.Component {

  state = {
    bots: []
  }


  componentDidMount(){
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`) 
    .then(response => response.json()) 
    .then(data => this.setState({bots: data}))
  }

  // ======{I'll stop at this point for serioius psychological issue }=========


  render() {
    return (
      <div>
        <BotCollection bot={this.state.bots}/>
     </div>
    );
  }

}

export default BotsPage;
