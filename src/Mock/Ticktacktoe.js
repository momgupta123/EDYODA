// import React, { useState } from 'react';
// import '../App.css';
// const App = () => {
//   const [board, setBoard] = useState(Array(9).fill(''));
//   const [player, setPlayer] = useState('X');
//   const [winner, setWinner] = useState(null);

//   const handleClick = (index) => {
//     if (board[index] === '' && !winner) {
//       const newBoard = [...board];
//       newBoard[index] = player;
//       setBoard(newBoard);
//       setPlayer(player === 'X' ? 'O' : 'X');
//       checkWinner(newBoard);
//     }
//   };

//   const checkWinner = (board) => {
//     const winningCombinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];

//     for (let i = 0; i < winningCombinations.length; i++) {
//       const [a, b, c] = winningCombinations[i];
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         setWinner(board[a]);
//         return;
//       }
//     }

//     if (board.every((cell) => cell !== '')) {
//       setWinner('Draw');
//     }
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(''));
//     setPlayer('X');
//     setWinner(null);
//   };

//   return (
//     <div className="App">
//       <h1>Tic Tac Toe</h1>
//       {winner ? (
//         <h2>{winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`}</h2>
//       ) : (
//         <h2>Next Player: {player}</h2>
//       )}
//       <div className="board">
//         {board.map((value, index) => (
//           <div key={index} className="cell" onClick={() => handleClick(index)}>
//             {value}
//           </div>
//         ))}
//       </div>
//       <button onClick={resetGame}>Reset</button>
//     </div>
//   );
// };

// export default App;


 import "../Mock/Styles.css";
//import '../App.css';

import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  //Write your code here...
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handlePlay(newSquares) {
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  function handleRestart(){
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every((square) => square !== null)) {
    status = "It's a tie!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
        <button onClick={handleRestart}>Restart</button>
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}





