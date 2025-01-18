export default function Log({turns}){
    // console.log(turns)
    return <ol id="log">
       Hello

       {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row} , {turn.square.col}</li>)}
        
        
    </ol>
}