import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import AlbumSearchDetails from './AlbumSearchDetails';
import { AlbumSearchContext } from "../../../context/SearchContext"
import './Search.css'

import {
    Container,
    Breadcrumb,
    Row,
    InputGroup,
    Button,
    FormControl,
    Spinner,
    Alert
} from 'react-bootstrap'

function AlbumSearch() {

    const navigate = useNavigate();
    const { search } = useLocation();

    const [isLoading, setIsLoading] = useState(false);
    const [albumSearchResult, setAlbumSearchResult] = useState("");
    const [albumResultsArray, setAlbumResultsArray] = useState([])
    const [alert, setAlert] = useState(true);

    useEffect(() => {

        let values = queryString.parse(search);
        if (values.s) {
            fetchAlbumResult(values.s);
        }
    }, []);

    async function fetchAlbumResult(albumSearchResult) {

        setIsLoading(true)

        navigate(`/album-search?s=${albumSearchResult}`, {
            replace: true,
        });

        try {

            const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
            const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

            let result = await axios.get(
                `https://api.discogs.com/database/search?q=${albumSearchResult}&format=Vinyl&page=1&per_page=100&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`, {
                headers: { 'User-Agent': 'CrateDigger/0.1' }
            });
            
            if (result.data.results.length === 0) {

                throw 'Album Not Found Please Check Spelling And Try Again'

            } else {

                setAlbumResultsArray(result.data.results)
                setIsLoading(false)
            
            }

        } catch (e) {

            toast.error(e, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    function handleOnAlbumChange(e) {
        setAlbumSearchResult(e.target.value);
    };

    async function handleOnAlbumClick() {
        fetchAlbumResult(albumSearchResult);
        setAlert(false)
    };

    const albumContextValue = {
        albumResultsArray
    }

    return (
        <Container style={{ height: "100vh", fontFamily: "Spartan" }}>
            <Row className="g-0">
                <Breadcrumb className="breadcrumb-styles">
                    <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Album Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/artist-search">Artist Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/wishlist">Wishlist</Breadcrumb.Item>
                    <Breadcrumb.Item href="/collection">Collection</Breadcrumb.Item>
                    <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            < Row className="g-0">
                <InputGroup className="input-spacing">
                    <FormControl
                        name="albumSearchResult"
                        value={albumSearchResult}
                        onChange={handleOnAlbumChange}
                        placeholder="Album Title or Barcode"
                    />
                    <Button onClick={handleOnAlbumClick}>Search</Button>
                </InputGroup>
            </Row>
   
            { alert ? (
                <Alert variant="success">  
                    <Alert.Heading>Hello Fellow Crate Digger,</Alert.Heading>
                    <p>
                        To find your next album just type in the album name or the bar code in the
                        search bar above. Our album search does not like misspelled album names, so make
                        sure you get the spelling right
                    </p>
                    <hr />
                    <p className="mb-0">
                        Thank you for using CrateDigger, happy hunting!
                    </p>
                </Alert>
            ) : (
                <Row className="results-row g-0">
                    {isLoading ? (
                            <Container
                                className="loading-container d-flex justify-content-center alialign-items-center"
                                style={{minHeight: "10vh"}}
                            >
                            <Spinner animation="border" variant="primary" />
                            <Spinner animation="border" variant="secondary" />
                            <Spinner animation="border" variant="success" />
                            <Spinner animation="border" variant="danger" />
                            <Spinner animation="border" variant="warning" />
                            <Spinner animation="border" variant="info" />
                            <Spinner animation="border" variant="light" />
                        </Container>
                    ) : (
                        <AlbumSearchContext.Provider value={albumContextValue}>
                            <AlbumSearchDetails />
                        </AlbumSearchContext.Provider>
                    )}
                </Row>
            )}
        </Container>
    )
}


export default AlbumSearch