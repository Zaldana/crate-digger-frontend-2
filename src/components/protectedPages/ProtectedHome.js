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
            <Row className="g-0" style={{ height: "70%" }}>
                
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
                                    href="/search"
                                    className="card-button border-0"
                                    style={{
                                        backgroundImage: "linear-gradient(to right top, #167edc, #0095e4, #00a9e4, #00bcdd, #00ccd4)"
                                    }}
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
                                    Check something off your list
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 card-footer">
                                <Button
                                    className="card-button border-0"
                                    style={{
                                        backgroundImage: "linear-gradient(to right top, #0fa33c, #50b131, #7abe24, #a2ca14, #cbd400)"
                                    }}
                                    href="/wishlist"
                                >
                                    Click For Wishlist
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
                                    see your current collection
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 card-footer">
                                <Button
                                    className="card-button border-0"
                                    style={{
                                        backgroundImage: "linear-gradient(to right top, #602785, #88409b, #b05bb1, #d878c8, #ff96df)"
                                    }}
                                    href="/collection"
                                >
                                    Click For Collection
                                </Button>
                            </Card.Footer>
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="mx-2 border-0 card-styles">
                        <Card.Img
                            variant="top"
                            src={collectionSmall}
                            className="card-image"
                            href="/collection"
                        />
                        <Card.ImgOverlay style={{ padding: "0%" }}>
                            <Card.Body className="card-body">
                                <Card.Title className="main-title">profile</Card.Title>
                                <br />
                                <Card.Text className="main-text">
                             settings & stats
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 card-footer">
                                <Button
                                    className="border-0 card-button"
                                    variant="danger"
                                    style={{ background: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)" }}
                                    href="/profile"
                                >
                                    Click For Profile
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
