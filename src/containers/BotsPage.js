import React from "react";
import BotCollection from './BotCollection'

const BotPage = (props) => {

    return (
      <div>
        <BotCollection
          bots={props.displayBots}
          addBot={props.addBot}
          // removedBot={this.props.removedBot}
        />
      </div>
    );

}

export default BotPage