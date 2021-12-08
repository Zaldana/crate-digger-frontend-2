import React from 'react'
import { Link } from "react-router-dom";


function Nav() {
    return (
        <div>
            <nav className="navbar">
                <div className="home-link-container">
                    <Link to="/">Home</Link>
                </div>
                
                <div>
                    <Link to="/sign-in">sign in</Link>
                    <Link to="/sign-up">sign up</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav
