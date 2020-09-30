import Main from './main';
import React, { Component, ReactDOM } from 'react';
import Timeline from './timeline'

class ProfilePage extends Component {
    render() {

        return (
            <div className="main2">
                <div className="second-column">
                    <Main />
                    <Timeline />
                </div>
            </div>
        );
    }
}
export default ProfilePage;
