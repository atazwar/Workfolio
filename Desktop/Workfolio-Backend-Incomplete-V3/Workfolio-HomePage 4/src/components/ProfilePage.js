import Main from './main';
import React, { Component, ReactDOM } from 'react';
import { withRouter } from "react-router-dom";

import '../profile.css'
import Navigation from './navigation';

const ProfilePage = (props) => {

    return (
        <div className="main0">
            {/* <Navigation />
            <br></br> */}
            <Main />
        </div>
    );
}

export default ProfilePage;
