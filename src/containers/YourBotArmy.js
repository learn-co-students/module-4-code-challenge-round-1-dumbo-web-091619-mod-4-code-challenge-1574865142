import React from 'react'
import BotCard from '../components/BotCard'
const YourBotArmy = (props) => {
  const { bots, updateYourBots } = props
  return (
    <div className='ui segment inverted olive bot-army'>
      <div className='ui five column grid'>
        <div className='row bot-army-row'>
          {bots.map(bot => <BotCard key={bot.id} bot={bot} updateYourBots={updateYourBots} toAdd={false} />)}
        </div>
      </div>
    </div>
  )
}

export default YourBotArmy
