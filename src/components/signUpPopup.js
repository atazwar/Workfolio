import React from 'react'
import { Link } from "react-router-dom";
import './signup_login.css';

function SignUpPopup(props) {
    return (
        <div className="overlay" onClick={() => props.history.goBack()}>
            <div className="Popup Signup-popup" onClick={(e) => { e.stopPropagation() }}>
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
                <p>Already have an account? <Link>Click here.</Link></p>
            </div>
        </div>
    )
}

export default SignUpPopup;
