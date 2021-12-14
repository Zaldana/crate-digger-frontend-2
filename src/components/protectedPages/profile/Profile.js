import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'

function Profile() {
    return (
        <Container>
            <div>
                this is the profile
            </div>
            <div>
                <div>
                    <div>
                        <Link to="/search">Dig through crates</Link>
                    </div>
                    <div>
                        <Link to="/collection">Collection</Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Profile