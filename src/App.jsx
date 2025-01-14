import PlayerInfo from "./components/playerInfo"
import GameBoard from "./components/GameBoard"
function App() {
  return (
    <>
      <section id="game-container">
      <ol id="players">
        <PlayerInfo name="Player 1" symbol="X"/>
        <PlayerInfo name= "Player 2" symbol="O"/>
      </ol>
      <GameBoard />
      </section>
    </>
  )
}

export default App
