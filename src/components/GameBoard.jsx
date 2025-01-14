import { useState } from "react"

const gameBoardArr = [
    [null , null , null ] , 
    [null, null , null ] ,
    [null , null , null] // 3 rows
]


export default function GameBoard(){
    const [gameBoard , setGameBoard] = useState(gameBoardArr)

    function handleGameBoard(rowI , colI){
        setGameBoard((prevGameBoard)=>{
           // prevGameBoard[rowI][colI] = "X"
           const updatedGameBoard = [...prevGameBoard.map((innerArray)=>[...innerArray])]
           updatedGameBoard[rowI][colI] = 'X'
           // to resolve mutability issue
            return updatedGameBoard;
        })
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