export default function GameBoard({onSelectSquare , board}){

    // const [gameBoard , setGameBoard] = useState(gameBoardArr)

    // function handleGameBoard(rowI , colI){
    //     setGameBoard((prevGameBoard)=>{
    //        // prevGameBoard[rowI][colI] = "X"
    //        const updatedGameBoard = [...prevGameBoard.map((innerArray)=>[...innerArray])]
    //        updatedGameBoard[rowI][colI] = activePlayerSymbol
    //        // to resolve mutability issue
    //         return updatedGameBoard;
    //     })

    //     onSelectSquare(); {/* Change player automatically once a tile is clicked*/}
    // }
    return( <>
        <ol id="game-board">
        {
            board.map((row , rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol , colIndex)=>(
                            <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex , colIndex)} disabled={playerSymbol!=null}>{playerSymbol}</button></li>
                        ))}
                    </ol>
                </li>
            ))
        }
        </ol>
    </>
    )
}