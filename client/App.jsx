import React from 'react';
import ReactDom from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import Homepage from './Homepage';
import UserProfile from './UserProfile'
import Messages from './Messages'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login />}/>
      <Route exact path='/homepage' element={<Homepage />}/>
      <Route exact path='/signUp' element={<SignUp />}/>
      <Route exact path='/userProfile' element={<UserProfile />}/>
      <Route exact path='/messages' element={<Messages />}/>
    </Routes>
  )
}

export default App;
