import React from 'react';

const Players = ({ players }) => {

  return (
    players.map((player, index) => {
      console.log(player.user, player.id)
      return <nav><button key={player.id}>{player.user}</button ></nav>
    })
  )
}

export default Players;