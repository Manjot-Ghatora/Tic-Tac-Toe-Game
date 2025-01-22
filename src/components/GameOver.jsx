export default function GameOver({winner , rematch}){
    return <>
        <div id="game-over">
            <h2>  Game Over </h2>
            {winner && <p>{winner.toUpperCase()} won !</p>}
            {!winner &&<p> It&apos;s a draw </p>}

            <button onClick={rematch}>Rematch</button>
        </div>
    </>
}