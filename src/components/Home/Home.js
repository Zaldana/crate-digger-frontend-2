import React from 'react'
import Container from 'react-bootstrap/Container'
import homeBg from '../../images/homebg.jpg'
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
            <img src={homeBg} className="home-bg-image"/>
            <Container className="heading-container">
                <h1 className="main-heading">Crate</h1>
                <h1 className="main-heading">Digger</h1>
                <h2 className="tag-line">find your next record</h2>
            </Container>
            <Container className="button-container">
                <Button
                    className="border-0 log-in-button"
                    size="lg"
                    variant="danger"
                    href="/sign-in"
                >Log In</Button>
                <Button
                    className="border-0 sign-in-button"
                    size="lg"
                    variant="success"
                    href="/sign-up"
                >Sign Up</Button>
            </Container>
        </Container>
    )
}

export default Home
