import React from 'react'
import NavBar from './NavBar'
import profilePic from './assets/JaimeProfile.png'
import Check from '@mui/icons-material/Check'
import Clear from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton';


function Homepage() {
  return (
    <div id='homepageContainer'>
      <NavBar/>
      <div style={{backgroundColor: 'white', flex:'1'}}>
        <div id='profileContainer'>
          <div id='picAndNameContainer'>
            <div id='nameOnProfile'>
              <h2>Name</h2>
            </div>
            <div id='profilePictureContainer'>
              <img src={profilePic} alt="" width='80%' id='profilePic'/>
            </div>
          </div>
          <div id='profileAboutYouContainer'>
            <div id='aboutYou'>
              <h2>About You</h2>
              <ul id='aboutYouList'>
                <li>Favorite Lanugage:</li>
                <li>Looking For:</li>
                <li>Your Role in the Relationship:</li>
              </ul>
            </div>
            <div id='buttonContainer'>
              <div id='checkButtonContainer'>
              <IconButton ><Check id='checkButton'/></IconButton>
              </div>
              <div id='cancelButtonContainer'>
              <IconButton ><Clear id='cancelButton'/></IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
