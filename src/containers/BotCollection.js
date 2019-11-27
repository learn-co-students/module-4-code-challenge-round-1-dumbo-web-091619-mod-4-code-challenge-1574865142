import React from 'react';
import BotCard from '../components/BotCard'

const BotCollection = (props) => {
  const { bots, viewBotsSpecs } = props
  return (
    <div className='ui four column grid'>
      <div className='row'>
        {bots.map(bot => <BotCard key={bot.id} bot={bot} viewBotsSpecs={viewBotsSpecs} toAdd={true} />)}
      </div>
    </div>
  )
}

export default BotCollection
