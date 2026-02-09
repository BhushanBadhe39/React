import React, { useState } from 'react';
import Square from './Square';
import './TicTacToe.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);
  const status = winner ? `Winner: ${winner}` : isDraw ? 'Draw' : `Next: ${xIsNext ? 'X' : 'O'}`;

  function handleClick(i) {
    if (winner || squares[i]) return;
    const next = squares.slice();
    next[i] = xIsNext ? 'X' : 'O';
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderSquare(i) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} key={i} />;
  }

  return (
    <div className="tictactoe">
      <h2>Tic Tac Toe</h2>
      <div className="status">{status}</div>
      <div className="board">
        {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
}
