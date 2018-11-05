import React from 'react';

const Players = ({ players }) => {

  return (
    <nav> {players.map((player, index) => {

      return <button key={player.id}>{player.user}</button >
    })} </nav>
  )
}

export default Players;