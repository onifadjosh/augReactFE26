import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'


const Chat = () => {
  const count =useSelector((sade)=>sade.count)
  return (
    <div>
      
      <Navbar/>
   <h1>   {count}</h1>
      This is the chat </div>
  )
}

export default Chat