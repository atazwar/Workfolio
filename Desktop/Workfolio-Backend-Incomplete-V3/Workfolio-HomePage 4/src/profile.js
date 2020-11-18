import React, { Component, ReactDOM } from 'react';
import './profile.css';
import Navigation from './components/navigation';
import ProfilePage from './components/ProfilePage';
import { withRouter } from 'react-router';

const Profile = () => {

    return (
        <div>
            {/* <Navigation /> */}
            <div className="app text-align-center">
                <ProfilePage />
            </div>
        </div>
    );
}

export default withRouter(Profile);
