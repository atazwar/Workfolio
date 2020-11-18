import React, { useState, useContext, useEffect } from "react";
import "./ProfilePicture.css"
import PlaceholderProfileImage from './ProfilePhoto.png'
import app from '../config/firebase.js'
import { AuthContext } from '../Auth.js'

const ProfilePicture = ({ imageUrl }) => {
    const [imageSource, setImageSource] = useState(PlaceholderProfileImage);
    const [imageUploaded, setImageUploaded] = useState(false);
    const [imageWritten, setImageWritten] = useState(false);
    const [fileUrl, setFileUrl] = useState(null);

    const db = app.firestore();

    const { currentUser } = useContext(AuthContext);

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        setImageSource(URL.createObjectURL(file));
        setImageUploaded(true);
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!fileUrl) {
            return;
        }

        await db.collection("users").doc(currentUser.uid).update({
            imageUrl: fileUrl
        })

        setImageWritten(true);
    }

    return (
        <div className = "rounded">
            {/* //src only works with static variables. */}
            {/* {src = request for url} */}
            {console.log(imageSource)}
            {imageUploaded ? 
                <img 
                    src = {imageSource}
                    width = "400px" 
                    height = "400px"
                />
            :
                <img 
                    src = {imageUrl}
                    width = "400px" 
                    height = "400px"
                />
            }
            {/* Handle rendering of user image */}
            {!imageUploaded ?
                <input 
                    className="input" 
                    type = "file" 
                    onChange = {onFileChange}
                />
            : imageUploaded && !imageWritten ?
                <button 
                    className="changeButton"
                    onClick = {onSubmit}
                >
                    Confirm Change?
                </button>
            : 
                <h3 className="successMessage">Nice! New Image Confirmed.</h3>
            }
        </div>
    );
}

export default ProfilePicture
