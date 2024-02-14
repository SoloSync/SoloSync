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
        hobbie: '',
    });

    const userName = (e) => {
        const { name, value } = e.target; 
        setUserInfo(prevState => ({
            ...prevState, 
            [name]: value,
            [hobbie]: value,
        }))
    };

    const [uploadImage, setUploadImage] = useState(null);
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
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
                    onchange={userName}
                    ></input>
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