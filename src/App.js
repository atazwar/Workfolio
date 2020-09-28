import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './components/navbar';
import Slider from './components/slider';
import LoginPopup from './components/loginPopup';
import SignUpPopup from './components/signUpPopup';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Slider />
        
        <Switch>
          <Route path="/sign-up" component={SignUpPopup} />
          <Route path="/login" component={LoginPopup} />
          {/* <Route path="/login" component={LoginPopupComponent} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
