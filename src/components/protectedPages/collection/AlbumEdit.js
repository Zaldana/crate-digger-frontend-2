import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import "./AlbumEdit.css"

import {
    Row,
    Container,
    CardGroup,
    Card,
    Breadcrumb,
    Button,
    InputGroup,
    FormControl,
    Col,
    Tab,
    Nav,
    Form,
    FloatingLabel
} from 'react-bootstrap'

function AlbumEdit() {

    const { id } = useParams();
    const albumId = id;

    const [album, setAlbum] = useState("");
    const [albumName, setAlbumName] = useState("");
    const [albumCover, setAlbumCover] = useState("");
    const [albumArtist, setAlbumArtist] = useState("");
    const [albumYear, setAlbumYear] = useState(0);
    const [albumCountry, setAlbumCountry] = useState("");
    const [albumLabel, setAlbumLabel] = useState([]);
    const [albumTracklist, setAlbumTracklist] = useState([]);
    const [albumGenre, setAlbumGenre] = useState([]);
    const [albumNotes, setAlbumNotes] = useState("");
    const [albumCondition, setAlbumCondition] = useState("");

    useEffect(() => {
        fetchAlbum(albumId);
    }, [])

    async function fetchAlbum(albumId) {

        try {

            let albumDetailsResult = await AxiosBackend.get(
                `collection/find-by-id/${albumId}`,
            );

            setAlbum(albumDetailsResult.data.payload);
            setAlbumName(albumDetailsResult.data.payload.albumName);
            setAlbumArtist(albumDetailsResult.data.payload.albumArtist);
            setAlbumYear(albumDetailsResult.data.payload.albumYear);
            setAlbumTracklist(albumDetailsResult.data.payload.albumTracklist);
            setAlbumGenre(albumDetailsResult.data.payload.albumGenre);
            setAlbumNotes(albumDetailsResult.data.payload.albumNotes);
            setAlbumLabel(albumDetailsResult.data.payload.albumLabel);
            setAlbumCountry(albumDetailsResult.data.payload.albumCountry);
            setAlbumCondition(albumDetailsResult.data.payload.albumCondition);
            setAlbumNotes(albumDetailsResult.data.payload.albumNotes);
            setAlbumCover(albumDetailsResult.data.payload.albumCover)

        } catch (e) {

            console.log(e);

        }
    }

    async function updateAlbumName(albumName) {

        try {

            await AxiosBackend.put(
                `collection/update-album-by-id/${albumId}`,
                {
                    albumName: albumName
                }
            );
        } catch(e) {

            console.log(e);

        }
    }

    function handleAlbumUpdateOnClick() {
        updateAlbumName(albumName);
    };

    function handleAlbumUpdateOnChange(e) {
        setAlbumName(e.target.value)
    }


        return (
            <Container>
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

                <Row className="row-2">
                    <Col className="image-column">
                        <img className="album-cover" src={album.albumCover}></img>
                    </Col>

                    <Col className="tab-column" >
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Album Info</Nav.Link>
                                        </Nav.Item>
                                        <br />
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tracklist</Nav.Link>
                                        </Nav.Item>
                                        <br />
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Labels</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9} >
                                    <Tab.Content  >
                                        <Tab.Pane eventKey="first">
                                            <h1><b>{albumName}</b></h1>
                                            <h4>{albumArtist}</h4>
                                            <p>
                                                <b>Year:</b> {albumYear}
                                                <br />
                                                <b>Country:</b> {albumCountry}
                                                <br />
                                                <b>Genres:</b> {albumGenre.join(', ')}
                                                <b>Condition:</b>{albumCondition}
                                            </p>
                                            <p><b>Condition:</b>{albumCondition}</p>
                                            <b>Album Notes:</b>
                                            <p>{albumNotes}</p>
                                            <Row className="d-flex justify-content-center ">

                                                <InputGroup className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={albumArtist}
                                                        value={albumName}
                                                        onChange={handleAlbumUpdateOnChange}
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-secondary"
                                                            type="button"
                                                            onClick={handleAlbumUpdateOnClick}
                                                        >Edit Condition</button>
                                                    </div>
                                                </InputGroup>

                                                <InputGroup className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={albumArtist}
                                                        value={albumName}
                                                        onChange={handleAlbumUpdateOnChange}
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <div className="input-group-append">
                                                        <button
                                                            className="btn btn-outline-secondary"
                                                            type="button"
                                                            onClick={handleAlbumUpdateOnClick}
                                                        >New Cover</button>
                                                    </div>
                                                </InputGroup>


                                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                                    <Form.Control
                                                        as="textarea"
                                                        placeholder="Leave a comment here"
                                                        style={{ height: '100px' }}
                                                    />
                                                    <Button type="submit">Submit</Button>
                                                </FloatingLabel>

                                            </Row>
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
        )
    }

export default AlbumEdit
