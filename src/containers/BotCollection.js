import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  constructor(){
    super();

    this.state = {
      bot: {}
    }
  }

  showSpecs = (bot) => {
      this.setState({
        bot: {bot}
      })
  }

  goBack = () => {
    this.setState({
      bot: {}
    })
  }

  handleArmy = (bot) => {
    if(this.state.bot.bot !== undefined){
      this.setState({ bot: {...this.state.bot.bot, inArmy: true}})
      this.props.addToArmy(this.state.bot.bot)
      this.props.addToArmy(bot)
    }
  }

  renderBots = () => {
    if (this.state.bot.bot !== undefined){
      return <BotSpecs bot={this.state.bot.bot} addToArmy={this.handleArmy} goBack={this.goBack} />
    } else {
      const transArr = this.props.bots.map((el) => <BotCard key={el.id} bot={el} showSpecs={this.showSpecs}/>)
      return transArr;
    }
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
