import { useState } from "react";

export default function Player({InitialName,symbol,isActive,onChangeName}) {
    const [name,setName]=useState(InitialName);
    const [isEditing,setIsEditing]=useState(false);

    function clickHandler(){
        setIsEditing(!isEditing);
        if(isEditing){
            onChangeName(symbol,name);
        }
    }

    function handleChange(e){
        setName(e.target.value);
    }

    let PlayerName=<span className="player-name">{name}</span>;

    if(isEditing){
        PlayerName=<input type="text"  required defaultValue={name} onChange={handleChange} />
    }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {PlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
