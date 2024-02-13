import React from 'react';
import {Routes, Route} from 'react-dom/client'
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import Homepage from './Homepage';

function App() {
  return (
    <NavBar />
    // <Routes>
    //   <Route path='/' element={<Login />}/>
    //   <Route path='/Homepage' element={<Homepage />}/>
    //   <Route path='/SignUp' element={<SignUp />}/>
    // </Routes>
  )
}

export default App;
