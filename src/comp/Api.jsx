import React, { useEffect, useState } from 'react'

const Api = () => {
    const[data,setData]=useState([])
// const[del,setDel]=useState()

    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
result.json().then((resp)=>{
    console.log("result",resp);
    setData(resp)
})
})

},[])  
console.log(data.name)  

function deleteData(e){
  fetch(`https://jsonplaceholder.typicode.com/users/${e}`,{
    method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
        console.log("result",resp);
       
})
  })
}  
  return (


    <div>
<table border="1">
<tr>
  <th>Id</th>
  <th>name</th>
  <th>usename</th>
<th>email</th>
<th>Delete</th>
</tr>
{
  data.map((item,i)=>
<tr key={i}>
  <td>{item.id}</td>
  <td>{item.name}</td>
  <td>{item.username}</td>
  <td>{item.email}</td>
  <td><button onClick={()=>deleteData(item.id)}>Delete</button></td>
  
</tr>
 )
}
</table>

    </div>
  )
}

export default Api