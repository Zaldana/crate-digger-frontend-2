import React from 'react'
import { Link } from 'react-router-dom'
import homeBg from '../../images/homebg.jpg'
import collectionSmall from '../../images/collectionSmall.jpg'
import './protectedHome.css'

import {
    Row,
    Container,
    CardGroup,
    Card,
    Button,
} from 'react-bootstrap'


function ProtectedHome() {
    return (
        <Container className="full-container">
            {/* <img src={homeBg} className="bg-image" /> */}
            <Row className="g-0"
               
                style={{
                    height: "70%",
                }}
            >
                <CardGroup className="main-card-group">
             
                    <Card className="mx-2 border-0 card-styles">
                        <Card.Img
                            variant="top"
                            src={collectionSmall}
                            className="card-image"
                        />
                        <Card.ImgOverlay style={{ padding: "0%" }}>
                            <Card.Body className="card-body">
                                <Card.Title className="main-title">search</Card.Title>
                                <br />
                                <Card.Text className="main-text">
                                    Find your next record
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 card-footer">
                                <Button
                                    className="card-button"
                                    style={{}}
                                >
                                    Click To Search
                                </Button>
                            </Card.Footer>
                        </Card.ImgOverlay>
                    </Card>
                    
                    <Card className="mx-2 border-0 card-styles">
                        <Card.Img
                            variant="top"
                            src={collectionSmall}
                            className="card-image"
                        />
                        <Card.ImgOverlay style={{ padding: "0%" }}>
                            <Card.Body className="card-body">
                                <Card.Title className="main-title">wishlist</Card.Title>
                                <br />
                                <Card.Text className="main-text">
                                    Find your next record
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 card-footer">
                                <Button
                                    className="card-button"
                                    style={{}}
                                >
                                    Click To Search
                                </Button>
                            </Card.Footer>
                        </Card.ImgOverlay>
                    </Card>
                    
                    <Card className="mx-2 border-0 card-styles">
                        <Card.Img
                            variant="top"
                            src={collectionSmall}
                            className="card-image"
                        />
                        <Card.ImgOverlay style={{ padding: "0%" }}>
                            <Card.Body className="card-body">
                                <Card.Title className="main-title">collection</Card.Title>
                                <br />
                                <Card.Text className="main-text">
                                    Find your next record
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 card-footer">
                                <Button
                                    className="card-button"
                                    style={{}}
                                >
                                    Click To Search
                                </Button>
                            </Card.Footer>
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="mx-2 border-0 card-styles">
                        <Card.Img
                            variant="top"
                            src={collectionSmall}
                            className="card-image"
                        />
                        <Card.ImgOverlay style={{ padding: "0%" }}>
                            <Card.Body className="card-body">
                                <Card.Title className="main-title">profile</Card.Title>
                                <br />
                                <Card.Text className="main-text">
                                    Find your next record
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 card-footer">
                                <Button
                                    className="card-button"
                                    style={{}}
                                >
                                    Click To Search
                                </Button>
                            </Card.Footer>
                        </Card.ImgOverlay>
                    </Card>
                
                </CardGroup>
                
                
                
                
                {/* <div>
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
            </Row>
            <Row className="g-0"> */}

            </Row>
        </Container>
    )
}

export default ProtectedHome
