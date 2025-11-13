
import axios from 'axios'
import React, { useEffect } from 'react'
import { baseUrl } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlics';
import UserCard from './UserCard'

function Feed() {
  const dispatch=useDispatch();
  const feed=useSelector((store)=>store.feed);
   const getFeeds=async()=>{
    if(feed) return;
    const feedRes=await axios.post(baseUrl+"/user/feed",{},{withCredentials:true});
    dispatch(addFeed(feedRes.data))
  }
  useEffect(()=>{
    getFeeds();

  },[])
  return (
    <div>
      {feed &&<UserCard user={feed[0]}/>}
    </div>
  )
}

export default Feed