import React from 'react'
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {username} = useParams()


    console.log(username);
    

    
  return (
    <div>
        <h1>This is a profile page for {username}</h1>
    </div>
  )
}

export default Profile