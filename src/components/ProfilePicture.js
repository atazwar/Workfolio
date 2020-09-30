import React, { Component } from "react";
import "./ProfilePicture.css"
import pro4 from "./pro4.jpg"

 
class ProfilePicture extends Component {
    

    ClosePop = () => {
        this.setState({
            seen: false,
        }
        
        );
        console.log(this.state.seen);
    };

    open = () => {
        return;
    }
    

    render() {

        return (
        <div className = "rounded">
            <img src = {pro4}
            width = "426px" 
            height = "426px"
            onClick={this.props.popUpWindow}
            />
        </div>

        );
    }
}

export default ProfilePicture