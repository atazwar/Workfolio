import React, { Component, useContext } from 'react';
import Timeline from './timeline'
import SideBar from './SideBar'
import { withRouter } from "react-router";

const MyProfile = () => {

    return(
        <div class = "main0">
            <SideBar />
            <Timeline />
        </div>
    )
}

export default withRouter(MyProfile);
