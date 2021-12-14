import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'

function ProtectedHome() {
    return (
        <Container>
            <div>
                this is the protected Home
            </div>
            <div>
                <div>
                    <div>
                        <Link to="/search">Dig through crates</Link>
                    </div>
                    <div>
                        <Link to="/collection">Collection</Link>
                    </div>
                    <div>
                        <Link to="/profile">Profile</Link>
                    </div>
                    <div>
                        <Link to="/wishlist">Wishlist</Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProtectedHome
