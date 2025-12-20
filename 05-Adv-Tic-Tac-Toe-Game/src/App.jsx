import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import Footer from "./components/Footer";

const IntialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function DeriveGameBoard(gameTurns) {
  const gameBoard = [...IntialGameBoard.map((innerArray) => [...innerArray])];
  for(const turn of gameTurns){
    const {square,player}=turn;
    const {row,col}=square;
    gameBoard[row][col]=player;
  }
  return gameBoard;
}

function DeriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function DeriveWinner(gameBoard,player){
    let winner;
    for(const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];

        if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && secondSquareSymbol===thirdSquareSymbol){
            winner=player[firstSquareSymbol];
        }
    }
    return winner;
}

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [player, setplayer] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const gameboard = DeriveGameBoard(gameTurns);
  const ActivePlayer = DeriveActivePlayer(gameTurns);
  const winner=DeriveWinner(gameboard,player);
  let hasDraw=gameTurns.length===9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prev) => {
      const currentPlayer = DeriveActivePlayer(prev);
      const updatedTurn = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prev,
      ];
      return updatedTurn;
    });
  }

  function handleChangeName(symbol, newName) {
    setplayer((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }

  console.log(player)

  function handleRestart(){
    setGameTurns([]);
  }

  return (
    <>
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            InitialName="Player 1"
            symbol="X"
            onChangeName={handleChangeName}
            isActive={ActivePlayer === "X"}
          />
          <Player
            InitialName="Player 2"
            symbol="O"
            onChangeName={handleChangeName}
            isActive={ActivePlayer === "O"}
          />
        </ol>
         {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
      <GameBoard board={gameboard} onSelectSquare={handleSelectSquare} />  
      </div>
    </main>
    <Footer/>
    </>
  );
}
