import React from "react";
import Square from "./Square";

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };


  //as this is a method for this class no need for const or function declaration
  handleClick(index) {
    //make a copy of squares --> see if theres a winner : 
    const squares = [...this.state.squares];

    // if theres a winner or the square is null we set it to x/0 then update state
    if (this.calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = this.state.xIsNext ? "X" : "0";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }



  renderSquare(index) {

    //passes the index of squares(state) --> retrieves the resulting button of the click.
    return (
      <Square
        value={this.state.squares[index]}
        onClick={() => this.handleClick(index)}
      />
    );
  }

  calculateWinner(squares) {
    //takes squares the copied array from handleClick then checks if squares[a][b][c] match
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  render() {
    //top bar text for players turn or winner
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      //console.log(winner)
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "0");
    }


    //creates the grid for the board.
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
