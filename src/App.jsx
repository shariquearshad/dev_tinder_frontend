import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import Signup from './components/Signup'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
import Connections from './components/Connections'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
     
      <Route path="/" element={<Body/>}>
       <Route path="/login" element={<Login/>}/> 
       <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<Signup/>}/>
         <Route path="/feed" element={<Feed/>}/>
         <Route path='/connection' element={<Connections/>}/>

       </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    
      
    </>
  )
}
 
export default App
