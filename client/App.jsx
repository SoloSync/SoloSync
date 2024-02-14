import React from 'react';
import ReactDom from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import Homepage from './Homepage';
import Notification from './Notification'
import Profile from './UserProfile';
import Messages from './Messages';

function App() {
  return (
    <Routes path='/' element={<Login />}>
      <Route path='/' element={<Login />}/>
      <Route path='/Homepage' element={<Homepage />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/SignUp' element={<SignUp />}/>
      <Route path='/NavBar' element={<NavBar />}/>
      <Route path='/Profile' element={<Profile />}/>
      <Route path='/Notification' element={<Notification />}/>
      <Route path='/Messages' element={<Messages />}/>
    </Routes>
  )
}

export default App;
