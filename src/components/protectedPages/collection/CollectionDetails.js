import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import Loading from "../../common/Loading";

import {
    Container,
    Breadcrumb,
    Row,
    Col,
    Button,
    Nav,
    Tab,
} from 'react-bootstrap'

function CollectionDetails() {

    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const albumCoverFromState = location.state.albumCover;
    const albumLabelArrayFromState = location.state.albumLabel
    const albumIdFromState = location.state.albumId
    const albumNameFromState = location.state.albumName
    const albumArtistFromState = location.state.albumArtist
    const albumYearFromState = location.state.albumYear
    const albumCountryFromState = location.state.albumCountry
    const albumTracklistFromState = location.state.albumTracklist
    const albumGenreFromState = location.state.albumGenre

    const [albumName, setAlbumName] = useState("")
    const [albumCover, setAlbumCover] = useState("")
    const [albumId, setAlbumId] = useState("")
    const [albumArtist, setAlbumArtist] = useState("")
    const [albumYear, setAlbumYear] = useState(0)
    const [albumCountry, setAlbumCountry] = useState("")
    const [albumLabel, setAlbumLabel] = useState([])
    const [albumTracklist, setAlbumTracklist] = useState([])
    const [albumGenre, setAlbumGenre] = useState([])
    const [albumNotes, setAlbumNotes] = useState("")

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

    }, [])

    // async function fetchAlbumDetails(id) {

    //     try {

    //         let albumDetailsResult = await axios.get(
    //             url + id, {
    //             headers: { 'User-Agent': 'CrateDigger/0.1' }
    //         });

    //         let artistArray = albumDetailsResult.data.artists[0]

    //         setAlbumDetailsArray(albumDetailsResult)
    //         setAlbumName(albumDetailsResult.data.title)
    //         setAlbumArtist(artistArray.name)
    //         setAlbumYear(albumDetailsResult.data.year)
    //         setAlbumTracklist(albumDetailsResult.data.tracklist)
    //         setAlbumGenre(albumDetailsResult.data.styles)
    //         setAlbumNotes(albumDetailsResult.data.notes)
    //         setAlbumId(id)

    //     } catch (e) {

    //         console.log(e);

    //     }
    // };


    async function handleDeleteOnClick(id) {


        try {

            await AxiosBackend.delete(`collection/delete-album-by-id/${id}`);

            navigate("/collection");

        } catch (e) {

            console.log(e);

        }

    }

    return (
        <Container style={{ height: "100vh" }}>
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
            {/* <div>
                <img src={albumCover}></img>
            </div>
            <Link to={`/album-edit/${objectId}`}>
                <button>Edit</button>
            </Link>
            <button onClick={() => handleDeleteOnClick(objectId)}>Delete</button> */}
        </Container>
    )
}

export default CollectionDetails