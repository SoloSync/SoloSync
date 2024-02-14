import React, { useRef } from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
// react-avatar allows users to upload profile images
import Avatar from 'react-avatar';
// react-avatar-editor allows user to adjust the image positions
import AvatarEditor from 'react-avatar-editor';

function UserProfile() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        fav_lang: '',
        looking_for: '',
        role: '',
        user_id: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setUserInfo(prevState => ({
       ...prevState, 
       [name]: value,
       }))
    }
    
    const handleSubmit = async (e) => {
        try{

            const {name, fav_lang, looking_for, role, user_id} = userInfo;

            const createProfile = await fetch("http://localhost:3000/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, fav_lang, looking_for, role, user_id }),
              });

            if(!createProfile.ok) {
                console.log('Error creating profile:', error);
                throw new Error("Error creating profile");
            }


        } catch(error) {
            throw new Error("Profile is not completed");
        }
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
                    onChange={handleChange }
                    ></input>
                </div>
            </div>

            <div id="userFavLang">
                <div >
                    <label>Fav. Lang: </label>
                    <textarea
                    type='text'
                    id='fav_lang'
                    name='fav_lang'
                    value={userInfo.fav_lang}
                    onChange={handleChange }
                    ></textarea>
                </div>
            </div>

            <div id="userLookingFor">
                <label>Looking For: </label>
                <div >
                    <textarea
                    type='text'
                    id='looking_for'
                    name='looking_for'
                    value={userInfo.looking_for}
                    onChange={handleChange }
                    ></textarea>
                </div>
            </div>

            <div id="userRole">
                 <label>Role: </label>
                <div >
                    <textarea
                    type='text'
                    id='role'
                    name='role'
                    value={userInfo.role}
                    onChange={handleChange }
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