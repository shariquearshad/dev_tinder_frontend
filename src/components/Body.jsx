import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { baseUrl } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'


function Body() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const userData=useSelector((store)=>store.user);
  const fetchUser=async ()=>{
    try{
      if(userData) return;
    const user =await axios.get(baseUrl+"/profile/view",{withCredentials:true})
    console.log(user);
    dispatch(addUser(user.data));
    }
    catch(err){
      console.log(err)
      if(err.status==401){
      navigate("/login");
      }
    }
  }

  useEffect(()=>{
    fetchUser();
  },[])
  return (
    <>
  
    
    <NavBar/>
    <Outlet/>
    <Footer/>
   
      </>
  )
}

export default Body