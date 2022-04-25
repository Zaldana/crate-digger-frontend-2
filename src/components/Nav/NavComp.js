import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../../images/logo.png'
import "./NavComp.css"

function NavComp() {

    const {
        state: { user },
        dispatch,
    } = useContext(AuthContext)

    const homeLink = user ? "/protected-home" : "/";

    const demoLink = user?.isAuth ? "/" : "/demo";
    const demoLabel = user?.isAuth ? "" : "demo";

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
        <Navbar
            fixed="top"
            expand="xxl"
            style={{
                background: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)"
            }}
        >
            <Container>
                <Navbar.Brand
                    style={{
                        fontFamily: "Erica One",
                    }}
                    href={homeLink}
                    className="d-flex align-items-center">
                    <img
                        src={logo}
                        style={{
                            height: "27px",
                            paddingRight: "3px",
                        }}
                        alt="logo"
                    />CrateDigger
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{ fontFamily: "Spartan" }} href={demoLink} onClick={() => logoutButton()}><b>{demoLabel}</b></Nav.Link>
                        <Nav.Link style={{ fontFamily: "Spartan" }} href={signupLink}>{signupLabel}</Nav.Link>
                        <Nav.Link style={{ fontFamily: "Spartan" }} href={signinLink} onClick={() => logoutButton()}>{signinLabel}</Nav.Link>
                       
                        {user ? (
                            <NavDropdown style={{ fontFamily: "Spartan" }} title="dig" id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    style={{ fontFamily: "Spartan" }}
                                    href="/album-search"
                                >Album Search
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="/artist-search"
                                    style={{ fontFamily: "Spartan" }}
                                >Artist Search
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="/collection"
                                    style={{ fontFamily: "Spartan" }}
                                >My Collection
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    href="/wishlist"
                                    style={{ fontFamily: "Spartan" }}
                                >My Wishlist
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="/profile"
                                    style={{ fontFamily: "Spartan" }}
                                >My Profile</NavDropdown.Item>
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

export default NavComp
