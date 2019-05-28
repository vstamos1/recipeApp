import React from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <Link to="/"><img src ={logo} height='70' alt="recipe logo" className="mx-3 navbar-brand" /></Link>
        <div className="collapse navbar-collape show ml-sm-5">
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to="/recipes">Recipes</Link>
                </li>
            </ul>
        </div>
        </nav>
    )
}
