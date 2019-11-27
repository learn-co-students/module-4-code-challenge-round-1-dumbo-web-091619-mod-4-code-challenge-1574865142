import React from "react";
import BotCard from "../components/BotCard";

// made this a functional component, as it's not doing any state work
const YourBotArmy = (props) => {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/* iterates over myBots and renders a BotCard for each, passing needed funcs as props */}
          {props.myBots.map(bot => {
            return < BotCard bot={bot} key={bot.id} selectABot={props.selectABot} backToPage={props.backToPage}/>
          })}
          </div>
        </div>
      </div>
    );
  }
  


export default YourBotArmy;
