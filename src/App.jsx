import {useState} from "react"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import GameOver from "./components/GameOver"
import { WINNING_COMBINATIONS } from "./winning-combinations"

const gameBoardArr = [
  [null, null , null ] , 
  [null, null , null ] ,
  [null, null , null ] // 3 rows
]

// doesn't need to re-render
function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'
      if(gameTurns.length>0 && gameTurns[0].player == 'X'){
            currentPlayer = 'O'
      }
      return currentPlayer;
}

function App() {

  // States
  const [gameTurns , setGameTurns] = useState([])
  const [players , setPlayers] = useState({
    X : 'Player 1',
    O : 'Player 2',
  });

  // Game-Board Function
  function deriveGameBoard(){
    let gameBoard = [...gameBoardArr.map(array => [...array])];
    
    for(const turn of gameTurns){
      const {square , player} = turn;
      const {row , col } = square;
      
      gameBoard[row][col] = player 
    }
    
    return gameBoard
  }
  
  // Button Click Handling
  function handleSelectSquare(rowI , ColI){
    setGameTurns(prevTurns => {
      
      let currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{square : {row : rowI , col : ColI} , player : currentPlayer } , ...prevTurns];
      
      return updatedTurns
    })
  }
  
  // Rematching after an outcome
  function handleRematch(){
    if(winner || hasDraw){
      setGameTurns([])
    }
  }
  
  // Updating Player Names when edited
  function handlePlayerName(symbol , newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol] : newName
      }})
    }
    
    // Deriving winner from possible combinations or keeping null elsewise
    function deriveWinner(gameBoard , players){
      let winner 
      
      for(const combinations of WINNING_COMBINATIONS){
        const firstSym = gameBoard[combinations[0].row][combinations[0].column];
        const secondSym = gameBoard[combinations[1].row][combinations[1].column];
        const thirdSym = gameBoard[combinations[2].row][combinations[2].column];
        
        if(firstSym && firstSym===secondSym && firstSym==thirdSym){
          winner = players[firstSym] // [] used to access if key/val is dynamic as it is here
        }
      }
      
      return winner
    }
    
    const gameBoard = deriveGameBoard()
    const activePlayer = deriveActivePlayer(gameTurns);
    const winner = deriveWinner(gameBoard , players)
    const hasDraw = (gameTurns.length === 9 && !winner)
    
    return (
      <>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name={players.X} symbol="X" isActive={activePlayer==='X'} newName={handlePlayerName}/>
        <PlayerInfo name= {players.O} symbol="O" isActive={activePlayer==='O'} newName={handlePlayerName}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} rematch={handleRematch}/>}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
 
    </>
  )
}
export default App
