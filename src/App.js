import React, { Component } from 'react';
import ButtonGrid from './components/buttonGrid';
import Players from './components/players';
import ScoreBoard from './components/scoreBoard';

import './App.css';

class App extends Component {
  state = {
    players: [
      {
        id: 'player1',
        user: 'Player 1',
        score: 1
      },
      {
        id: 'player2',
        user: 'Player 2',
        score: 2
      }
    ],
    currentUser: "Player 1"
  }

  render() {
    console.log(this.state.players, 'in App')
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Players players={this.state.players} />
        <ButtonGrid />
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
