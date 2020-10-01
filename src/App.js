import React, { Component, ReactDOM } from 'react';
import './App.css';
import Navigation from './components/navigation';
import ProfilePage from './components/ProfilePage';

class App extends Component {

    render() {

        return (

            <div>
                <Navigation />
                <div className="app text-align-center">
                    <ProfilePage />
                </div>
            </div>
        );
    }
}

export default App;
