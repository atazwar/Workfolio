import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './signup_login.css';

// Create Login Popup
function LoginPopup (props) {
    let [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.addEventListener("mousedown", () => {
            setIsOpen(false);
        })
    })

    return (
        <div className="overlay" onClick={() => props.history.goBack()}>
            <div className="Popup Login-popup" onClick={(e) => { e.stopPropagation() }}>
                <p className="Login-Title">Login</p>
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
                <p>Don't have account?<Link to="">Click here.</Link></p>
            </div>
        </div>
    )
};

export default LoginPopup;