import React from 'react'
import Container from 'react-bootstrap/Container'

import Button from 'react-bootstrap/Button'
import './Home.css'

function Home() {
    return (
        <Container
            className="full-container"
            style={{
                flexDirection: "column",
   
            }}
        >
            <Container className="heading-container">
                <h1 className="main-heading">Crate</h1>
                <h1 className="main-heading">Digger</h1>
                <h2 className="tag-line">find your next record</h2>
            </Container>
            <Container className="home-button-container">
                <Button
                    className="border-0 log-in-button"
                    size="lg"
                    variant="danger"
                    href="/sign-in"
                >Log In</Button>
                <Button
                    className="border-0 sign-up-button"
                    size="lg"
                    variant="success"
                    href="/sign-up"
                >Sign Up</Button>
                <Button
                    className="border-0 demo-button"
                    size="lg"
                    variant="success"
                    href="/demo"
                >Demo</Button>
            </Container>
        </Container>
    )
}

export default Home
