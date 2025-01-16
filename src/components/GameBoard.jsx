import { useState } from "react"

const gameBoardArr = [
    [null , null , null ] , 
    [null, null , null ] ,
    [null , null , null] // 3 rows
]


export default function GameBoard({onSelectSquare , activePlayerSymbol}){
    const [gameBoard , setGameBoard] = useState(gameBoardArr)

    function handleGameBoard(rowI , colI){
        setGameBoard((prevGameBoard)=>{
           // prevGameBoard[rowI][colI] = "X"
           const updatedGameBoard = [...prevGameBoard.map((innerArray)=>[...innerArray])]
           updatedGameBoard[rowI][colI] = activePlayerSymbol
           // to resolve mutability issue
            return updatedGameBoard;
        })

        onSelectSquare(); {/* Change player automatically once a tile is clicked*/}
    }
    return( <>
        <ol id="game-board">
        {
            gameBoard.map((row , rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((col , colIndex)=>(
                            <li key={colIndex}><button
                             onClick={()=>handleGameBoard(rowIndex , colIndex)}>{col}</button></li>
                        ))}
                    </ol>
                </li>
            ))
        }
        </ol>
    </>
    )
}