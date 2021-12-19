import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";
import { ArtistSearchContext } from "../../../context/SearchContext"
import ArtistSearchDetails from './ArtistSearchDetails'
import './Search.css'

import {
    Container,
    Breadcrumb,
    Row,
    InputGroup,
    Button,
    FormControl,
   Spinner,
} from 'react-bootstrap'

function ArtistSearch() {

    const navigate = useNavigate();
    const { search } = useLocation();

    const [isLoading, setIsLoading] = useState(false);
    const [artistSearchResult, setArtistSearchResult] = useState("");
    const [artistResultsArray, setArtistResultsArray] = useState([])

    useEffect(() => {
        const values = queryString.parse(search);
        if (values.s) {
            fetchArtistResult(values.s);
        }
    }, []);

    async function fetchArtistResult(artistSearchResult) {

        setIsLoading(true)

        navigate(`/artist-search?s=${artistSearchResult}`, {
            replace: true,
        });

        try {

            const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
            const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

            let result = await axios.get(
                `https://api.discogs.com/database/search?type=artist&q=${artistSearchResult}&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`, {
                headers: { 'User-Agent': 'CrateDigger/0.1' }
            });

            setArtistResultsArray(result.data.results)
            setIsLoading(false)

        } catch (e) {

            console.log(e);

        }
    };

    function handleOnArtistChange(e) {
        setArtistSearchResult(e.target.value);
    };

    async function handleOnArtistClick() {
        fetchArtistResult(artistSearchResult);
    };

    const artistContextValue = {
        artistResultsArray
    }

    return (
        <Container style={{ height: "100vh" }}>
            <Row className="g-0">
                <Breadcrumb className="breadcrumb-styles">
                    <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Artist Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/album-search">Album Search</Breadcrumb.Item>
    
                    <Breadcrumb.Item href="/wishlist">Wishlist</Breadcrumb.Item>
                    <Breadcrumb.Item href="/collection">Collection</Breadcrumb.Item>
                    <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            < Row className="g-0">
                <InputGroup className="input-spacing">
                    <FormControl
                        name="artistSearchResult"
                        value={artistSearchResult}
                        onChange={handleOnArtistChange}
                        placeholder="Artist"
                    />
                    <Button onClick={handleOnArtistClick}>Search</Button>
                </InputGroup>
            </Row>

            <Row className="results-row g-0">
                {isLoading ? (
                    <Container className="loading-container">
                        <Spinner animation="border" variant="primary" />
                        <Spinner animation="border" variant="secondary" />
                        <Spinner animation="border" variant="success" />
                        <Spinner animation="border" variant="danger" />
                        <Spinner animation="border" variant="warning" />
                        <Spinner animation="border" variant="info" />
                        <Spinner animation="border" variant="light" />
                    </Container>
                ) : (
                    <ArtistSearchContext.Provider value={artistContextValue}>
                        <ArtistSearchDetails />
                    </ArtistSearchContext.Provider>
                )}
            </Row>
        </Container>
    )
}


export default ArtistSearch