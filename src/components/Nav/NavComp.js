import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/logo.png'

function NavComp() {

    const {
        state: { user },
        dispatch,
    } = useContext(AuthContext)
    
    const homeLink = user ? "/protected-home" : "/";

    const signinLink = user?.isAuth ? "/" : "/sign-in";
    const signinLabel = user?.isAuth ? "logout" : "login";

    const signupLink = user?.isAuth ? "/profile" : "/sign-up"
    const signupLabel = user?.isAuth ? user?.username : "sign up"

    let logoutButton = user ? logout : () => { };

    function logout() {

        dispatch({
            type: "LOGOUT",
        });

        window.localStorage.removeItem("jwtToken");
    }
    
    return (
        <Navbar fixed="top" expand="xxl" variant="dark" style={styles.backgroundColor}>
                <Container>
                <Navbar.Brand
                    style={{
                        fontFamily: "Erica One",
                        color: "darkslategray"
                    }}
                    href={homeLink}
                    className="d-flex align-items-center">
                    <img
                        src={logo}
                        style={{
                            height: "27px",
                            paddingRight: "3px",
                        }} />
                    CrateDigger
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href={signupLink}>{signupLabel}</Nav.Link>
                            <Nav.Link href={signinLink} onClick={() => logoutButton()}>{signinLabel}</Nav.Link>
                            {user ? (
                                <NavDropdown title="dig" style={{ color: "white" }} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/album-search">Album Search</NavDropdown.Item>
                                    <NavDropdown.Item href="/artist-search">Artist Search</NavDropdown.Item>
                                    <NavDropdown.Item href="/collection">My Collection</NavDropdown.Item>
                                    <NavDropdown.Item href="/wishlist">My Wishlist</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <div></div>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

const styles = {
    backgroundColor: {
        background: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)"
    },

}

export default NavComp
