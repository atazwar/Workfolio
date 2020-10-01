import React, { Component } from 'react';
import Timeline from './timeline'
import SideBar from './SideBar'

class MyProfile extends Component {
    render() {
        return(
            <div class = "main0">
                <SideBar />
                <Timeline />
            </div>
        )
    }
}

export default MyProfile;
