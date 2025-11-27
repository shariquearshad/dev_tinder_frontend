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
import Chat from './components/Chat'
import Requests from './components/Request'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              {/* <Route path="/premium" element={<Premium />} /> */}
              <Route path="/chat/:targetUserId" element={<Chat />} />
            </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    
      
    </>
  )
}
 
export default App
