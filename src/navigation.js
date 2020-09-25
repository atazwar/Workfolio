import React, { Component, ReactDOM } from 'react';
import { Button, ButtonToolbar, ToggleButton, ButtonGroup, Navbar, Nav, NavDropdown, Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import { Layout, Header, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Navigation from './components/navigation';
import Option from './components/option'
import Option1 from './components/option1';
import Option2 from './components/option2';
import Option3 from './components/option3';
import Option4 from './components/option4';
import Option5 from './components/option5';
import Option6 from './components/option6';

class App extends Component {
    constructor() {
      super();
      this.state = {
        Option: <Option1 />
      };
      this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(event) {
      console.log(event.target.value);
      if(event.target.value === 'page1'){
          this.setState({Option: <Option1 />});
      }
      else if(event.target.value === 'page2'){
          this.setState({Option: <Option2 />});
      }
      else if(event.target.value === 'page3'){
          this.setState({Option: <Option3 />});
      }
      else if(event.target.value === 'page4'){
          this.setState({Option: <Option4 />});
      }
      else if(event.target.value === 'page5'){
          this.setState({Option: <Option5 />});
      }
      else if(event.target.value === 'page6'){
          this.setState({Option: <Option6 />});
      }
    }

    render() {

        return (

            <div>
                <Navigation />
                <div className="app">
                    <div className="main1">
                        <div className="first-column">
                            <div>&nbsp;</div>
                            <div className="page-content1" />
                                {this.state.Option}
                        </div>
                        <div className="text-center">
                            <Button onClick={() => {
                                const name1 = 'Previous Option';
                                alert(name1);
                                }} variant="dark">
                                <span className="fas fa-caret-left"></span>
                            </Button>
                            <span onChange={this.onChangeValue}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" value="page1" name="option1" defaultChecked /> &nbsp;&nbsp;
                                <input type="radio" value="page2" name="option1" /> &nbsp;&nbsp;
                                <input type="radio" value="page3" name="option1" /> &nbsp;&nbsp;
                                <input type="radio" value="page4" name="option1" /> &nbsp;&nbsp;
                                <input type="radio" value="page5" name="option1" /> &nbsp;&nbsp;
                                <input type="radio" value="page6" name="option1" /> &nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <Button onClick={() => {
                                const name2 = 'Next Option';
                                alert(name2);
                                }} variant="dark">
                                <span className="fas fa-caret-right"></span></Button>{' '}
                        </div>
                    </div>
                    <div className="main2">
                        <div className="second-column">
                            <Main />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
