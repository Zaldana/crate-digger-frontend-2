import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

import {
    Container,
    Breadcrumb,
    Row,
    Col,
    Nav,
    Tab,
} from 'react-bootstrap'

function CollectionDetails() {

    const location = useLocation();

    const albumCoverFromState = location.state.albumCover;
    const albumLabelArrayFromState = location.state.albumLabel
    const albumIdFromState = location.state.albumId
    const albumNameFromState = location.state.albumName
    const albumArtistFromState = location.state.albumArtist
    const albumYearFromState = location.state.albumYear
    const albumCountryFromState = location.state.albumCountry
    const albumTracklistFromState = location.state.albumTracklist
    const albumGenreFromState = location.state.albumGenre
    const albumConditionFromState = location.state.albumCondition
    const albumNotesFromState = location.state.albumNotes

    const [albumName, setAlbumName] = useState("")
    const [albumCover, setAlbumCover] = useState("")
    const [ , setAlbumId] = useState("")
    const [albumArtist, setAlbumArtist] = useState("")
    const [albumYear, setAlbumYear] = useState(0)
    const [albumCountry, setAlbumCountry] = useState("")
    const [albumLabel, setAlbumLabel] = useState([])
    const [albumTracklist, setAlbumTracklist] = useState([])
    const [albumGenre, setAlbumGenre] = useState([])
    const [albumNotes, setAlbumNotes] = useState("")
    const [albumCondition, setAlbumCondition] = useState("")

    useEffect(() => {

        setAlbumCover(albumCoverFromState)
        setAlbumCountry(albumCountryFromState)
        setAlbumLabel(albumLabelArrayFromState)
        setAlbumName(albumNameFromState)
        setAlbumArtist(albumArtistFromState)
        setAlbumYear(albumYearFromState)
        setAlbumTracklist(albumTracklistFromState)
        setAlbumGenre(albumGenreFromState)
        setAlbumNotes(albumNameFromState)
        setAlbumId(albumIdFromState)
        setAlbumNotes(albumNotesFromState)
        setAlbumCondition(albumConditionFromState)

    }, [])

    return (
        <Container style={{ height: "100vh", fontFamily: "Spartan" }}>
            <Row className="g-0">
                <Breadcrumb className="breadcrumb-styles">
                    <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/artist-search">Artist Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/album-search">Album Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/artist-search">Artist Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/wishlist">Wishlist</Breadcrumb.Item>
                    <Breadcrumb.Item href="/collection">Collection</Breadcrumb.Item>
                    <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row md={2}>
                <Col className="image-column">
                    <img className="album-cover" src={albumCover} alt="album cover"></img>
                </Col>

                <Col className="tab-column" >
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                        <Row>
                            <Col sm={4}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="custom-pill" eventKey="first">Album Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="custom-pill" eventKey="second">Tracklist</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="custom-pill" eventKey="third">Labels</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={8} details-col>
                                <Tab.Content  >
                                    <Tab.Pane eventKey="first">
                                        <h1><b>{albumName}</b></h1>
                                        <h4>{albumArtist}</h4>
                                        <p>
                                            <b>Year:</b> {albumYear}
                                            <br />
                                            <b>Country:</b> {albumCountry}
                                            <br />
                                            <b>Genre:</b> {albumGenre.join(', ')}
                                        </p>
                                        <p>
                                            <b>Condition:</b> {albumCondition}
                                        </p>
                                        <p>
                                            <b>Album Notes:</b>
                                            <p>{albumNotes}</p>
                                         </p>
                                      
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" >
                                        <h1><b>{albumName}</b></h1>
                                        <br />
                                        {albumTracklist.map((item) => (
                                            <h5>{item.position}. {item.title}</h5>
                                        ))}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" >
                                        <h1><b>Labels</b></h1>
                                        <br />
                                        {albumLabel.map((item) => (
                                            <li>{item}</li>
                                        ))}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>

                </Col>
            </Row>
        </Container>
    )}

export default CollectionDetails