import React from 'react';
import './style.css';

// Create Login Popup
const LoginPopupComponent = () => (
  <div className="Popup Login-popup">
    <p className="Login-Title">Login to Your Account</p>
    <div className="Login-Input-Section">
      <a className="Login-Input-Title">Username</a>
      <input className="Login-Input"/>
      <a className="Login-Input-Title">Password</a>
      <input className="Login-Input" type="password" />
    </div>
    <div className="Login-Remember-Me-Section">
      <input type="checkbox" /> 
      <a>Remember me</a>
    </div>
    <button className="Login-Button">Login</button>
    <p>Don't have account? Click here</p>
  </div>
);

// Create Sign up Popup
const SignUpPopupComponent = () => (
  <div className="Popup Signup-popup">
    <p className="Login-Title">Sign-Up Now</p>
    <div className="Login-Input-Section">
      <a className="Login-Input-Title">Full Name:</a>
      <input className="Login-Input"/>
      <a className="Login-Input-Title">Username:</a>
      <input className="Login-Input"/>
      <a className="Login-Input-Title">Password:</a>
      <input className="Login-Input" type="password"/>
      <a className="Login-Input-Title">Occupation:</a>
      <input className="Login-Input"/>
    </div>
    <button className="Login-Button">Create an account</button>
    <p>Already have an account? Click here</p>
  </div>
);

export default {
  LoginPopupComponent, 
  SignUpPopupComponent
}