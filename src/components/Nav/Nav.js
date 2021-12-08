import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

function Nav() {

    const {
        state: { user },
        dispatch,
    } = useContext(AuthContext)
    
    const homeLink = user ? "/protected-home" : "/";

    const signinLink = user?.isAuth ? "/" : "/sign-in";
    const signinLabel = user?.isAuth ? "Logout" : "Login";

    const signupLink = user?.isAuth ? "/profile" : "/sign-up"
    const signupLabel = user?.isAuth ? user?.username : "Sign Up"

    let logoutButton = user ? logout : () => { };

    function logout() {

        dispatch({
            type: "LOGOUT",
        });

        window.localStorage.removeItem("jwtToken");
    }

    return (
        <div>
            <nav className="navbar">
                <div className="home-link-container">
                    <Link to={homeLink}>Home</Link>
                </div>
                
                <div>
                    <Link to={signupLink}>{signupLabel}</Link>
                    <Link to={signinLink} onClick={() => logoutButton()}>{signinLabel}</Link>
                </div>
            </nav>
        </div>
    )
}

export default Nav
