import axios from 'axios'
import React, { useEffect } from 'react'
import { baseUrl } from '../utils/constants'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';


function Connections() {
  // [Connections,setConnections()]=useState();
  const dispatch=useDispatch();
  const connections=useSelector((store)=>store.connections);

    const fetchConnections=async()=>{
        try {

            const res= await axios.get(baseUrl+"/user/connections",{
                withCredentials:true
            })
            // console.log(res.data.data);
            dispatch(addConnections(res.data.data));
            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
      fetchConnections()
    },[])
    if(!connections) return;
    if(connections.length===0) return <h1>No Connections Found</h1>
  return (
    <div className=' text-center m-10'>
 <div className=' text-bold text-2xl'>Connections</div>

 {connections.map(connection=>{
  const {firstName,lastName,photoUrl,age,about}=connection
  return(<div key={connection._id}>
    <img alt="photo" className=' w-20 h-20' src={photoUrl}/>
    <h2>{firstName+"    "+lastName}</h2>
    <p>{about}</p>
    </div>)
 })}
    </div>
   
  )
}

export default Connections