import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import profilePic from './assets/JaimeProfile.png'
import Check from '@mui/icons-material/Check'
import Clear from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton';


function Homepage() {
  const [listOfProfiles, setListOfProfile] = useState([{aboutId:''}])
  const [index, setIndex] = useState(0);
  const [aboutYouInfo, setAboutYouInfo] = useState({name: '', favLang: '', lookingFor: ''})

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch('http://localhost:3000/profile/')
        if (!response.ok) {
          throw new Error ('error in grabbing profiles')
        }
        const data = await response.json();
        console.log(data)
        console.log(data.users)
        setListOfProfile(data.users);
      }
      catch (error) {
        console.error('error in the useEffect getting profiles')
      }
    }
    fetchData();
  },[])

  useEffect(() => {
    async function fetchAboutYouInfo() {
      try {
        console.log(listOfProfiles[index])
        console.log(index)
        const aboutYouId = listOfProfiles[index];
        console.log(aboutYouId.userId)
        const secondResponse = await fetch('http://localhost:3000/profile/about', {
          method: 'POST',
          body: JSON.stringify({"id": aboutYouId}),
          headers: {
            'Content-Type': 'applications/json'
          }
        });
        if (!secondResponse.ok) {
          throw new Error('Error in getting aboutYou info')
        }
        const aboutYouData = await secondResponse.json();
        console.log(aboutYouData)
        setAboutYouInfo(aboutYouData);
      }
      catch(error) {
        console.log('Error in getting aboutYou info', error)
      }
    }
    fetchAboutYouInfo();
  }, [index])

  const handleNextProfile = () => {
    setIndex(index+1)
  }

  return (
    <div id='homepageContainer'>
      <NavBar/>
      <div style={{backgroundColor: 'white', flex:'1'}}>
        <div id='profileContainer'>
          <div id='picAndNameContainer'>
            <div id='nameOnProfile'>
              <h2>{aboutYouInfo.name}</h2>
            </div>
            <div id='profilePictureContainer'>
              <img src={profilePic} alt="" width='80%' id='profilePic'/>
            </div>
          </div>
          <div id='profileAboutYouContainer'>
            <div id='aboutYou'>
              <h2>About You</h2>
              <ul id='aboutYouList'>
                <li>Favorite Lanugage: {aboutYouInfo.favLang}</li>
                <li>Looking For: {aboutYouInfo.lookingFor} </li>
                <li>Your Role in the Relationship: {aboutYouInfo.role}</li>
              </ul>
            </div>
            <div id='buttonContainer'>
              <div id='checkButtonContainer'>
              <IconButton onClick={handleNextProfile}><Check id='checkButton'/></IconButton>
              </div>
              <div id='cancelButtonContainer'>
              <IconButton onClick={handleNextProfile}><Clear id='cancelButton'/></IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
