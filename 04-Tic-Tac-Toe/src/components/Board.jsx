import { useState } from "react";
import Square from "./Square";

function CalculateWinner(square) {
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
    if (square[a] && square[a] === square[b] && square[b] === square[c]) {
      return square[a];
    }
  }
  return null;
}

export default function Board() {
  const [sqaure, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setNext] = useState(true);

  function handleClick(index) {
    //1.Check if array is completely filled or there is winner
    if (sqaure[index] || CalculateWinner(sqaure)) {
      return;
    }
    //2.Create a copy of squares
    const nextSqaures = sqaure.slice();
    //3.Update the copy
    if (xIsNext) {
      nextSqaures[index] = "X";
    } else {
      nextSqaures[index] = "O";
    }

    //4.Save the state
    setNext(!xIsNext);
    setSquare(nextSqaures);
  }

  const winner = CalculateWinner(sqaure);
  const isDraw = sqaure.every((square) => square !== null);
  const firstMove=sqaure.every((square)=>square===null);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (isDraw) {
    status = "Game Over: Draw";
  } else if(firstMove){
    status="Player : X"
  }else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={sqaure[0]}
          onSquareClick={() => handleClick(0)}
          isSelected={sqaure[0] !== null}
        />
        <Square
          value={sqaure[1]}
          onSquareClick={() => handleClick(1)}
          isSelected={sqaure[1] !== null}
        />
        <Square
          value={sqaure[2]}
          onSquareClick={() => handleClick(2)}
          isSelected={sqaure[2] !== null}
        />
      </div>
      <div className="board-row">
        <Square
          value={sqaure[3]}
          onSquareClick={() => handleClick(3)}
          isSelected={sqaure[3] !== null}
        />
        <Square
          value={sqaure[4]}
          onSquareClick={() => handleClick(4)}
          isSelected={sqaure[4] !== null}
        />
        <Square
          value={sqaure[5]}
          onSquareClick={() => handleClick(5)}
          isSelected={sqaure[5] !== null}
        />
      </div>
      <div className="board-row">
        <Square
          value={sqaure[6]}
          onSquareClick={() => handleClick(6)}
          isSelected={sqaure[6] !== null}
        />
        <Square
          value={sqaure[7]}
          onSquareClick={() => handleClick(7)}
          isSelected={sqaure[7] !== null}
        />
        <Square
          value={sqaure[8]}
          onSquareClick={() => handleClick(8)}
          isSelected={sqaure[8] !== null}
        />
      </div>
    </>
  );
}
