import {useState} from "react"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"

function App() {

  const [gameTurns , setGameTurns] = useState([])
  const [activePlayer , setActivePlayer] = useState('X')

  function handleSelectSquare(rowI , ColI){
    setActivePlayer((current)=>{
      return current === 'X' ? 'O' : 'X'
    })

    setGameTurns(prevTurns => {

      let currentPlayer = 'X'
      if(gameTurns.length>0 && gameTurns[0].player == 'X'){
            currentPlayer = 'O'
      }
      const updatedTurns = [{square : {row : rowI , col : ColI} , player : currentPlayer } , ...prevTurns];

      return updatedTurns
    })
  }


  return (
    <>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name="Player 1" symbol="X" isActive={activePlayer==='X'} />
        <PlayerInfo name= "Player 2" symbol="O" isActive={activePlayer==='O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
 
    </>
  )
}

export default App
