import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import './AlbumDetails.css'

import {
    Container,
    Breadcrumb,
    Row,
    Col,
    Button,
    Nav,
    Tab,
} from 'react-bootstrap'

function AlbumDetails() {

    const { id } = useParams();
    const location = useLocation();

    const albumCoverFromState = location.state.albumCover;
    const albumCountryFromState = location.state.albumCountry
    const albumLabelArrayFromState = location.state.albumLabel
    const fromArrayFromState = location.state.from

    const [albumDetailsArray, setAlbumDetailsArray] = useState([])
    const [albumName, setAlbumName] = useState("")
    const [albumCover, setAlbumCover] = useState("")
    const [albumId, setAlbumId] = useState("")
    const [albumArtist, setAlbumArtist] = useState("")
    const [albumYear, setAlbumYear] = useState(0)
    const [albumCountry, setAlbumCountry] = useState("")
    const [albumLabel, setAlbumLabel] = useState([])
    const [albumTracklist, setAlbumTracklist] = useState([])
    const [albumNotes, setAlbumNotes] = useState("")
    const [albumGenre, setAlbumGenre] = useState([])

    const [albumGenreDisplay, setAlbumGenreDisplay] = useState("")
    const [added, setAdded] = useState(false)

    let altId = id;
    let url = "";

    if (id.length <= 1) {
        altId = location.state.id
        url = "https://api.discogs.com/releases/"
    } else {
        url = "https://api.discogs.com/masters/"
    }
    
    useEffect(() => {

        fetchAlbumDetails(id)
        setAlbumCover(albumCoverFromState)
        setAlbumCountry(albumCountryFromState)
        setAlbumLabel(albumLabelArrayFromState)
        
    }, [])

    async function fetchAlbumDetails(id) {

        try {

            let albumDetailsResult = await axios.get(
                url + id, {
                headers: { 'User-Agent': 'CrateDigger/0.1' }
            });

            let artistArray = albumDetailsResult.data.artists[0]

            setAlbumDetailsArray(albumDetailsResult)
            setAlbumName(albumDetailsResult.data.title)
            setAlbumArtist(artistArray.name)
            setAlbumYear(albumDetailsResult.data.year)
            setAlbumTracklist(albumDetailsResult.data.tracklist)
            setAlbumGenre(albumDetailsResult.data.styles)
            setAlbumNotes(albumDetailsResult.data.notes)
            setAlbumId(id)

            setAlbumGenreDisplay(albumDetailsResult.data.styles.join(', '))

        } catch (e) {

            console.log(e);

        }
    };

    async function addToCollection() {

        try {
            let payload = await AxiosBackend.post(
                'collection/add/', {
                    albumName,
                    albumCover,
                    albumId,
                    albumArtist,
                    albumYear,
                    albumCountry,
                    albumLabel,
                    albumTracklist,
                    albumGenre
            });
            
            toast.success(`Added ${albumName} to Collection`, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setAdded(true)

        } catch (e) {
            console.log(e);
        }
    }

    async function addToWishlist() {

        try {

            let payload = await AxiosBackend.post(
                'wishlist/add/', {
                albumName,
                albumCover,
                albumId,
                albumArtist,
                albumYear,
                albumCountry,
                albumLabel,
                albumTracklist,
                albumGenre
            });

            toast.success(`Added ${albumName} To Wishlist`, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setAdded(true)

        } catch (e) {
            console.log(e);

        }
    }

    return (
        <Container style={{height: "100vh", fontFamily: "Spartan"}}>
            <Row className="g-0">
                <Breadcrumb className="breadcrumb-styles">
                    <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/album-search">Album Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/artist-search">Artist Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/wishlist">Wishlist</Breadcrumb.Item>
                    <Breadcrumb.Item href="/collection">Collection</Breadcrumb.Item>
                    <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
                </Breadcrumb>
            </Row>
            <Row>
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
                                    <br />
                                    <Nav.Item>
                                        <Nav.Link className="custom-pill" eventKey="second">Tracklist</Nav.Link>
                                    </Nav.Item>
                                    <br />
                                    <Nav.Item>
                                        <Nav.Link className="custom-pill" eventKey="third">Labels</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={8} >
                                <Tab.Content  >
                                    <Tab.Pane eventKey="first">
                                        <h1><b>{albumName}</b></h1>
                                        <h4>{albumArtist}</h4>
                                        <p>
                                            <b>Year:</b> {albumYear}
                                            <br />
                                            <b>Country:</b> {albumCountry}
                                            <br />
                                            <b>Genre:</b> {albumGenreDisplay}
                                        </p>
                                        <b>Album Notes:</b>
                                        <p>{albumNotes}</p>
                                        <br />
                                        {added ? (
                                            <div></div>
                                        ) : (
                                            <div>
                                                { fromArrayFromState === "wishlist" ? (
                                                    <div>
                                                        <Button
                                                            onClick={addToCollection}
                                                            className="border-0 collection-button"
                                                            variant="danger"
                                                        >Add To Collection
                                                        </Button>
                                                    </div>
                                                    ) : (
                                                        <div>
                                                            <Button
                                                                onClick={addToCollection}
                                                                className="border-0 collection-button"
                                                                variant="success"
                                                            >Add To Collection
                                                            </Button>
                                                            <Button
                                                                onClick={addToWishlist}
                                                                className="border-0 wishlist-button"
                                                                variant="dark"
                                                            >Add To Wishlist
                                                            </Button>
                                                        </div>
                                                )}
                                            </div>
                                        )}
                                        
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" >
                                        <h1><b>{albumName}</b></h1>
                                        <br/>
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

export default AlbumDetails
