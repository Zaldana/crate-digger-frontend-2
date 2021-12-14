import React from 'react'
import Container from 'react-bootstrap/Container'
import homeBg from '../../images/homebg.jpg'

function Home() {
    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{ height: "calc(100vh - 56px)" }}
        >
            <img src={homeBg} style={{
                objectFit: "cover",
                height: "calc(100vh - 56px)",
                width: "100%",
                zIndex: "-1",
                position: "absolute"
            }} />
            <h1
                className="justify-content-center main-heading"

            >
                Crate
                <br />
                Digger
            </h1>
        </Container>
    )
}

export default Home
