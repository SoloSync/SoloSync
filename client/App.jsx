import React from 'react';
import ReactDom from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import Homepage from './Homepage';
import UserProfile from './UserProfile'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login />}/>
      <Route exact path='/Homepage' element={<Homepage />}/>
      <Route exact path='/SignUp' element={<SignUp />}/>
      <Route exact path='/UserProfile' element={<UserProfile />}/>
    </Routes>
  )
}

export default App;
