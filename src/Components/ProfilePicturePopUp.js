import React, { Component } from "react";
import MyPhoto from "./pro4.jpg";
import ProfilePicture from "./ProfilePicture";
import "./ProfilePicturePopUp.css"


class ProfilePicturePopUp extends Component{

    render(){
        return(
        <div className = "PopUp">
            <div className = "buttons">
            <button>change</button>
            <button onClick= {this.props.toggleClose} >X</button>
            </div>
            <img src = {MyPhoto}/>
        </div>
        );
    }
}

export default ProfilePicturePopUp