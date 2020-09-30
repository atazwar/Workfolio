import React, { Component, ReactDOM } from 'react';
import { Button, ButtonToolbar, ToggleButton, ButtonGroup, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { Layout, Header, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import RadioButton from './components/radiobutton'
import Navigation from './components/navigation';
import Option from './components/option'
import Option1 from './components/option1';
import Option2 from './components/option2';
import Option3 from './components/option3';
import Option4 from './components/option4';
import Option5 from './components/option5';
import Option6 from './components/option6';
import Option7 from './components/option7';
import Option8 from './components/option8';
import SideBar from './components/SideBar';
import ProfilePage from './components/ProfilePage';

class App extends Component {

    render() {

        return (

            <div>
                <Navigation />
                <div className="app">
                    <SideBar />
                            <ProfilePage />
                </div>
            </div>
        );
    }
}

export default App;
