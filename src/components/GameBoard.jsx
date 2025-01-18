import { useState } from "react"

const gameBoardArr = [
    [null, null , null ] , 
    [null, null , null ] ,
    [null, null , null ] // 3 rows
]


export default function GameBoard({onSelectSquare , turns}){
    let gameBoard = gameBoardArr

    for(const turn of turns){
        const {square , player} = turn;
        const {row , col } = square;

        gameBoard[row][col] = player 
    }
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
            gameBoard.map((row , rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((col , colIndex)=>(
                            <li key={colIndex}><button
                             onClick={() => onSelectSquare(rowIndex , colIndex)}>{col}</button></li>
                        ))}
                    </ol>
                </li>
            ))
        }
        </ol>
    </>
    )
}