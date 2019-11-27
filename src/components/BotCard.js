import React from "react";

export default class BotCard extends React.Component {

//I could add a bot to the army
//
// I could remove a bot from the army
//
// I could prevent duplicate additions using state
//
// but I couldnt figure out how to flip the state of the card in Bot Collection back to 'false
// so it could be readded to the army
//
// I tried a bunch of different things but I could not get a state change to trigger when clicking
// on a card in YourBotArmy
//
// I knew what I had to do with the state, but couldnt figure out how to do it

  state = {
    added: false
  }
  
  
    onClickFunctionsAddBot = () => {
    (this.props.addBot) ? this.props.addBot(this.props.bot) : this.onClickFunctionsRemoveBot()
    // (this.props.addBot) ? this.props.addBot(this.props.bot) : this.props.removeBot(this.props.bot)
    
      //   if (this.props.removedBot === this.props.bot){
      // this.setState({
      //  added: false
      // })
    // }
    
        // console.log(this.state.added)
    this.setState({
      added: !this.state.added
    })
  }
  
    onClickFunctionsRemoveBot = () => {
    // console.log("test")
    // console.log(state)
    // this.onClickFunctionsAddBot()
    
    this.props.removeBot(this.props.bot)
    this.setState({
      added: !this.state.added
    })
  }


  // componentDidMount() {
  //   if (this.props.removedBot === this.props.bot){
  //     this.setState({
  //      added: false
  //     })
  //   }
  // }

//  onClickFunctionsRemoveBot = (state) => {
//     // console.log("test")
//     // console.log(state)
    
//     this.props.removeBot(this.props.bot)
//     this.props.bot.setState({
//       added: !this.state.added
//     })
//   }

render() {

// console.log(this.props.removedBot === this.props.bot)

const { bot } = this.props;

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }



  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={ !(this.state.added) ? this.onClickFunctionsAddBot : (null) }
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );
}
};

// export default BotCard;
