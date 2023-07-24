import React, { useEffect, useState } from 'react'

const Covid19 = () => {
 const[country,setCountry]=useState();
 const[resp,setResp]=useState([]);
useEffect(()=>{
fetch(`https://disease.sh/v3/covid-19/countries`)
.then((response)=>response.json())
.then((data)=>setResp(data))
.catch((err)=>{console.log(err.message);
});

},[]);
function output(){
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
.then((response)=>response.json())
.then((data)=>setResp(data))

}


  return (
 <>
 
    <div>Covid19</div>
 <div>
    <input type="text" onChange={(e)=>setCountry(e.target.value)} placeholder='covidgo' />
    <br />
    <button onClick={output}>search</button>
 </div>
<div>
    <p>case:{resp.cases}</p>
    <p> Death:{resp.deaths}</p>
    <p> Recovered:{resp.recovered}</p>
    {/* aur bhi ase hi hoga */}
</div>

    </>
    )
}

export default Covid19