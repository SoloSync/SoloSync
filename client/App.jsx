import React from 'react';
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import Homepage from './Homepage';

function App() {
  return (
    <NavBar />
    // <Routes>
    //   <Route path='/Homepage' component={Homepage}/>
    //   <Route path='/Login' component={Login}/>
    //   <Route path='/SignUp' component={SignUp}/>
    // </Routes>
  )
}

export default App;
