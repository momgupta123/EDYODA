import React, { useState } from 'react'

const Appndandundo = () => {
const[value,setValue]=useState();
const[todo,setTodo]=useState([]);
function Append(){
    let update=[...todo];
    update.push(value);
    setTodo(update);
    setValue('')
}
function Undo(){
    let update=[...todo];
    update.pop(value);
    setTodo(update);
    setValue('')
}
  return (
    <div>
        <input type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
                />
        <button onClick={Append}>Append</button>
       <button onClick={Undo}>Undo</button> 
        <ul>
{
    todo.map((it)=>{
        return(<li>{it}{it}</li>)
    })
}
     </ul>
        
        
        </div>
  )
}

export default Appndandundo