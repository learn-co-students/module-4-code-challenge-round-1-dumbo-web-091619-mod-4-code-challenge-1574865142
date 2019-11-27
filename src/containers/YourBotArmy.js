import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = (props) => {

    const distributeBotArmy = props.botArmy.map( bot =>
      <BotCard
        key={bot.id}
        bot={bot}
        removeBot={props.removeBot}
      />
    )

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { distributeBotArmy }
          </div>
        </div>
      </div>
    );

};

export default YourBotArmy

