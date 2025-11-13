import axios from 'axios'
import React, { useEffect } from 'react'
import { baseUrl } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlics';
import EditProfile from './EditProfile';

function Profile() {
   const user=useSelector((store)=>store.user);

  

 
  return (
    <div>
      {user && <EditProfile user={user}/>}
      </div>
    
  )
}

export default Profile