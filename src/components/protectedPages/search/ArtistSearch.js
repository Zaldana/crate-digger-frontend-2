import React from 'react'
import { useState, useEffect } from "react";
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
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
    Alert,
    Form
} from 'react-bootstrap'

function ArtistSearch() {

    const navigate = useNavigate();
    const { search } = useLocation();

    const [isLoading, setIsLoading] = useState(false);
    const [artistSearchResult, setArtistSearchResult] = useState("");
    const [artistResultsArray, setArtistResultsArray] = useState([])
    const [alert, setAlert] = useState(true);

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

            let result = await AxiosBackend.get(
                `discogs/get-artist:${artistSearchResult}`
            );

            if (result.data.results.length === 0) {

                throw 'Artist Not Found Please Check Spelling And Try Again'

            } else {
                setArtistResultsArray(result.data.results)
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

    function handleOnArtistChange(e) {
        setArtistSearchResult(e.target.value);
    };

    async function handleOnArtistSubmit(event) {
        event.preventDefault();
        fetchArtistResult(artistSearchResult);
        setAlert(false)
    };

    const artistContextValue = {
        artistResultsArray
    }

    return (
        <Container style={{ height: "100vh", fontFamily: "Spartan"}}>
            <Row className="g-0">
                <Breadcrumb className="breadcrumb-styles">
                    <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/album-search">Album Search</Breadcrumb.Item>
                    <Breadcrumb.Item active>Artist Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/wishlist">Wishlist</Breadcrumb.Item>
                    <Breadcrumb.Item href="/collection">Collection</Breadcrumb.Item>
                    <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            <Form className="g-0" onSubmit={handleOnArtistSubmit}>
                <InputGroup className="input-spacing">
                    <FormControl
                        name="artistSearchResult"
                        value={artistSearchResult}
                        onChange={handleOnArtistChange}
                        placeholder="Artist"
                    />
                    <Button type="submit">Search</Button>
                </InputGroup>
            </Form>

            {alert ? (
                <Alert variant="info">
                    <Alert.Heading>Hello Fellow Crate Digger,</Alert.Heading>
                    <p>
                        CrateDigger gives you the best results by using the Album Search, but if you are having trouble
                        remembering the exact name of an album we have an Artist Search that gives you some of the artist's
                        vinyl releases to help you find your next album. To find an Artist and their vinyl releases just type
                        in the name of the artist in the search bar above.
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
                            style={{ minHeight: "10vh" }}
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
                        <ArtistSearchContext.Provider value={artistContextValue}>
                            <ArtistSearchDetails />
                        </ArtistSearchContext.Provider>
                    )}
                </Row>
            )}
        </Container>
    )
}


export default ArtistSearch