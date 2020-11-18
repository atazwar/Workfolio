import React from "react";
import MyPhoto from "./pro4.jpg";
import "./ProfilePicturePopUp.css"


const ProfilePicturePopUp = () => {
    
    return(
        <div className = "PopUp">
            <div className = "buttons">
            <button>change</button>
            <button onClick={this.props.toggleClose}>X</button>
            </div>
            <img src = {MyPhoto}/>
        </div>
        );
}

export default ProfilePicturePopUp