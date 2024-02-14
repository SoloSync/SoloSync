import React from 'react';
import NavBar from './NavBar'; 
import Avatar from '@mui/joy/Avatar'
import Image from './assets/JaimeProfile.png'
import InsertPhoto from '@mui/icons-material/InsertPhoto'
import AttachFile from '@mui/icons-material/AttachFile'
import Gif from '@mui/icons-material/Gif'
import InsertEmoticon from '@mui/icons-material/InsertEmoticon'




function Messages() {

    return(
        <div className='messagesPageContainer'>
          <NavBar />
          <div className='conversations'>
            <h2>Messages</h2>
            <button className='singleConversation'>
              <div className='Avatar'>
                <Avatar src={Image} />
              </div>
              <h2 className='singleConversationName'>
                Elaine
              </h2>
            </button>
            <button className='singleConversation'>
              <div className='Avatar'>
                <Avatar src={Image} />
              </div>
              <h2 className='singleConversationName'>
                Elaine
              </h2>
            </button>
          </div>
          <div className='chatBox'>
            <h2 className='messageFrom'>Elaine</h2>
            <div className='chatHistory'>
              hello
            </div>
            <div className='inputChat'>
              <textarea type='text' className='inputArea'></textarea>
              <div className='toolBar'>
                <InsertPhoto />
                <AttachFile />
                <Gif />
                <InsertEmoticon />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Messages;