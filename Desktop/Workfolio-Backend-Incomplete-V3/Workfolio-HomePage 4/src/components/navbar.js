import React, { useContext } from 'react'
import './navbar.css'
import { withRouter } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import app from '../config/firebase.js'
import { AuthContext } from '../Auth.js'

const Navbar = (props) => {

    const logout = () => {
        app.auth().signOut();
    }

    const { currentUser } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
            <Link className="navbar-brand text-white" to={"/"}>Workfolio</Link>
            {/* <a className="navbar-brand text-white" href="/">Workfolio</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                <ul className="navbar-nav ml-auto">
                {currentUser ? (
                <>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-0" to={"/profile"}>My Profile</Link>
                    </li>
                    <li className="nav-item inactiveLink">
                        <a className="nav-link text-white text-uppercase ml-0" href="#">|</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase mr-0" onClick={logout}>Logout</Link>
                        {/* <button onClick={logout}>Logout</button> */}
                        {/* <a className="nav-link text-white text-uppercase mr-0" onClick={logout}>Logout</a> */}
                    </li>
                </>
                    ) : (
                <>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase ml-0" to={"/login"}>Login</Link>
                        {/* <a className="nav-link text-white text-uppercase ml-0" href="/login">Login</a> */}
                    </li>
                    <li className="nav-item inactiveLink">
                        <a className="nav-link text-white text-uppercase ml-0" href="#">|</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white text-uppercase mr-0" to={"/sign-up"}>Sign up</Link>
                    </li>
                </>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
