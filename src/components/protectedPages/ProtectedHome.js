import React from 'react'
import collectionSmall from '../../images/collectionSmall.jpg'
import profile from '../../images/profile.jpg'
import search from '../../images/search.jpg'
import wishlist from '../../images/wishlist.jpg'
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
        <Container fluid="true" className="protected-home">
            <Row xs={1} className="row-1 g-0">
                <CardGroup className="main-card-group">
                    <Card className="mx-2 border-0 card-styles">
                        <Card.Img
                            variant="top"
                            src={search}
                            className="card-image"
                            alt=""
                        />
                        <Card.ImgOverlay style={{ padding: "0%" }}>
                            <Card.Body className="card-body">
                                <Card.Title className="main-title">album search</Card.Title>
                                <br />
                                <Card.Text className="main-text">
                                    Find by album name
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 card-footer">
                                <Button
                                    href="/album-search"
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
                            src={search}
                            className="card-image"
                            alt=""
                        />
                        <Card.ImgOverlay style={{ padding: "0%" }}>
                            <Card.Body className="card-body">
                                <Card.Title className="main-title">artist search</Card.Title>
                                <br />
                                <Card.Text className="main-text">
                                    Find by Artist Name
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 card-footer">
                                <Button
                                    href="/artist-search"
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
                        src={wishlist}
                            className="card-image"
                            alt=""
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
                            alt=""
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
                        src={profile}
                        className="card-image"
                            href="/collection"
                            alt=""
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
            </Row>
        </Container>
    )
}

export default ProtectedHome
