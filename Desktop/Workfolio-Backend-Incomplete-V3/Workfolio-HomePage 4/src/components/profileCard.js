import React from 'react'
import './profileCard.css'

//Profile cards displayed on slider on home page.
const ProfileCard = ({name, occupation, imageUrl}) => {
    return (
        <div class="container">
            {console.log(imageUrl)}
            <div class="svg-background"></div>
            <div class="svg-background2"></div>
            {imageUrl ? 
                <img className="circle" src={imageUrl} />
            : 
                <img className="circle" src={require('./ProfilePhoto.png')} />
            }
            <div class="text-container">
                <p class="title-text">{name}</p>
                <p class="info-text">{occupation}</p>
            </div>
        </div>
    )
}

export default ProfileCard;
