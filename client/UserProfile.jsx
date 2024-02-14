import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
// react-avatar allows users to upload profile images
import Avatar from 'react-avatar';
// react-avatar-editor allows user to adjust the image positions
import AvatarEditor from 'react-avatar-editor';

function UserProfile() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        location: '',
        hobbies: '',
        aboutMe: '',
        favTech: '',
        techGoals: '',
    });
    
    const userName = (e) => {
        const { name, value } = e.target; 
        setUserInfo(prevState => ({
            ...prevState, 
            [name]: value,
        }))
    };


    const [uploadImage, setUploadImage] = useState(null);
    // const [saveClicked, setSavedClicked] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if(file) {
            setUploadImage(file);
        }
    }

    const editorRef = useRef(null);

    const editAvatar = (e) => {
        if(editorRef.current) {
            const image = editorRef.current.getImageScaledToCanvas();
            const imageUrl = image.toDataURL();
            console.log('Editd image URL:', imageUrl);
        }
    }
    
    return(
        <div id='navBarContainer'>
            <NavBar />
            <div id="userName">
                <div >
                    <label>Name: </label>
                    <input
                    type='text'
                    name='name'
                    value={userInfo.firstName}
                    onChange={userName}
                    ></input>
                </div>
            </div>

            <div id="userLocation">
                <div >
                    <label>Location: </label>
                    <input
                    type='text'
                    id='location'
                    name='location'
                    value={userInfo.location}
                    onChange={userName}
                    ></input>
                </div>
            </div>

            <div id="userHobbies">
                <label>Hobbies: </label>
                <div >
                    <textarea
                    type='text'
                    id='hobbies'
                    name='hobbies'
                    value={userInfo.hobbies}
                    onChange={userName}
                    ></textarea>
                </div>
            </div>

            <div id="userFavTech">
                 <label>Fav. Tech: </label>
                <div >
                    <textarea
                    type='text'
                    id='favTech'
                    name='favTech'
                    value={userInfo.favTech}
                    onChange={userName}
                    ></textarea>
                </div>
            </div>

            <div id="userTechGoals">
                <label>Tech Goals: </label>
                <div >
                    <textarea
                    type='text'
                    id='techGoals'
                    name='techGoals'
                    value={userInfo.techGoals}
                    onChange={userName}
                    ></textarea>
                </div>
            </div>

            <div id="userAboutMe">
                <label>About Me: </label>
                <div>
                    <textarea
                    className='textarea'
                    type='text'
                    id='aboutMe'
                    name='aboutMe'
                    value={userInfo.aboutMe}
                    onChange={userName}
                    ></textarea>
                </div>
            </div>

            <div id="avatarEdit">
                <input type="file" onChange={handleImageUpload} />
            </div>
            <div id="avatarEdit2" style={{ position: 'auto', width: 'auto', height: 'auto' }}>
                {uploadImage && <AvatarEditor 
                    ref={editorRef}
                    image={uploadImage}
                    width={125}
                    height={125}
                    borderRadius={250}
                    color={[255, 255, 255, 0.6]}
                    scale={1.0}
                    rotate={0}
                />}
            </div>
            <div id="save">
                 <button onClick={editAvatar}>Save</button><br/>
            </div>
        </div>
    )
}

export default UserProfile;