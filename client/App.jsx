import React from 'react';
import {Routes, Route} from 'react-dom/client'
import NavBar from './NavBar';
import SignUp from './SignUp';

function App() {
  return (
    // <div> 
    //   <div>TEST</div>
    //   <Route exact path='SignUp' element={<SignUp />} />
    // </div>
    <SignUp />
  )
}

export default App
