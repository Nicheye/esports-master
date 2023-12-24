import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login";

import Logout from './components/Logout';
import Navigate from './components/Navigate'
import Register from './components/Register'
import Profile from './components/Profile'
import Games from './pages/Games'
import Mate from './pages/Mate'
import Footer from './components/Footer'
import Personal_page from './pages/profik_page'
function App() {
 

  return (
    <BrowserRouter>
        <Navigate/>
        <Routes>
          <Route path="/" element={<Games/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/games" element={<Games/>}/>
          <Route path='/game/:id' element={<Mate></Mate>}/>
          <Route path='/profik/:id' element={<Personal_page/>}/>
        </Routes>
        <Footer/> 
      </BrowserRouter>
  
  )
}

export default App
