import {useState} from "react"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from "./components/GameBoard"
function App() {

  const [activePlayer , setActivePlayer] = useState('X')

  function handleSelectSquare(){
    setActivePlayer((current)=>{
      return current === 'X' ? 'O' : 'X'
    })
  }


  return (
    <>
      <section id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo name="Player 1" symbol="X" isActive={activePlayer==='X'} />
        <PlayerInfo name= "Player 2" symbol="O" isActive={activePlayer==='O'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </section>
    </>
  )
}

export default App
