import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, increaseCount, updateFirstname } from '../redux/appslice'


const Home = () => {
  const [first, setfirst] = useState("")
  const count =useSelector((sade)=>sade.count)
  const dispatch=useDispatch()
  const firstname= useSelector((state)=>state.firstname)

  // const checkFirst=()=>{
  //   setfirst(e.target.value)
  // }
  return (
    <div>
      
        <Navbar/>
      <input type="text" onChange={(e)=>setfirst(e.target.value)}/>

        <h1>{count}</h1>
      <h1>This user is {firstname}</h1>
        This is the home page

        <button className='btn btn-dark' onClick={()=>dispatch(increaseCount())}>+</button>
        <button className='btn btn-dark' onClick={()=>dispatch(decreaseCount())}>-</button>


        <button onClick={()=>dispatch(updateFirstname(first))}>update the name</button>
    </div>
  )
}

export default Home






