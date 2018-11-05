import React from "react";
import Square from "./Square";

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };
  //as this is a method for this class no need for const or function declaration
  handleClick(index) {
    const squares = [...this.state.squares];
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = this.state.xIsNext ? "X" : "0";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }
  renderSquare(index) {
    return (
      <Square
        value={this.state.squares[index]}
        onClick={() => this.handleClick(index)}
      />
    );
  }
  calculateWiner(squares) {
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
    for (let i = 0; i > lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "0");
    }

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

<<<<<<< HEAD
export default Board;
=======
export default Board;
>>>>>>> 31d84a5b7d2228515ff11de66e23614e5a38977f
