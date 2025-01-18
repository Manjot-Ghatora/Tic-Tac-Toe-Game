import { useState } from "react"
export default function PlayerInfo({name , symbol , isActive}){

    const [isEditing , setIsEditing] = useState(false);
    const [playerName , setPlayerName] = useState(name);

    function handleEditing(){
        setIsEditing((isEditing)=>!isEditing);
    }
    function handleChange(event)
    {
        
        setPlayerName(event.target.value);
    }
    let playerInfo = <span className="player-name">{playerName}</span>;
    let dynamicBtn = "Edit";

    if(isEditing)
    { 
        playerInfo =  <input type="text" required value={playerName} onChange={handleChange}/>
        dynamicBtn="Save"
    }
    return(
        <>
   
            <li className={isActive ? 'active' : undefined}>
                <span className="player">
                    {playerInfo}
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={handleEditing}>{dynamicBtn}</button>
                </span>
            </li>
        </>
    )


}
