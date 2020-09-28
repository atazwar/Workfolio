import React from 'react'
import './profileCardLayout.css'
import ProfileCard from './profileCard'

function ProfileCardLayout() {
    return (
        <ul className="layout">
            <li className="card">
                <ProfileCard className="test" name="Thanesh Pannirselvam" occupation="Student"/>
            </li>
            <li className="card">
                <ProfileCard className="test" name="John Doe" occupation="Student"/>
            </li>
            <li className="card">
                <ProfileCard className="test" name="John Doe" occupation="Student"/>
            </li>
            <li className="card">
                <ProfileCard className="test" name="John Doe" occupation="Student"/>
            </li>
            <li className="card">
                <ProfileCard className="test" name="John Doe" occupation="Student"/>
            </li>
            <li className="card">
                <ProfileCard className="test" name="John Doe" occupation="Student"/>
            </li>
        </ul>
    )
}

export default ProfileCardLayout;
