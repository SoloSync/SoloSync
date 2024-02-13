import React from 'react';
import ReactDom from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import Homepage from './Homepage';

function App() {
  return (
    <Routes path='/' element={<Login />}>
      <Route path='/' element={<Login />}/>
      <Route path='/Homepage' element={<Homepage />}/>
      <Route path='/SignUp' element={<SignUp />}/>
    </Routes>
  )
}

export default App;
