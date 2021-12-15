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
            <Container                
                style={{
                    width: "100%",
                    height: "90%",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <h1 className="main-heading">Crate</h1>
                <h1 className="main-heading">Digger</h1>
                <h2 className="tag-line">find your next record</h2>
            </Container>
        </Container>
    )
}

export default Home
