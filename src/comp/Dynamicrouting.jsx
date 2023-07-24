import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import SeDynamic from './SeDynamic'

const Dynamicrouting = () => {
let users=[
{id:1,name:"ram",email:"ram@test.com"},
{id:2,name:"mom",email:"mom@test.com"},
{id:3,name:"moni",email:"moni@test.com"},
{id:4,name:"monika",email:"monika@test.com"},
{id:5,name:"mamta",email:"mamta@test.com"},
{id:6,name:"rahul",email:"rahul@test.com"},
{id:7,name:"raushan",email:"raushan@test.com"},
{id:8,name:"rakesh",email:"rakesh@test.com"},
{id:9,name:"raja",email:"raja@test.com"},

]



  return (
<div className='DYN'>
<Router>
<h1>react Dynamic</h1>
{
    users.map((item)=>
    <div><Link to={"users/"+item.id}><h3>{item.name}</h3></Link></div>)
}
<SeDynamic/>
</Router>

</div>
  )
}

export default Dynamicrouting