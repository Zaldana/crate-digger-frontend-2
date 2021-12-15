import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArtistSearchContext, AlbumSearchContext } from "../../../context/SearchContext"
import Loading from "../../common/Loading";
import AlbumSearchDetails from './AlbumSearchDetails';
import ArtistSearchDetails from './ArtistSearchDetails'

import {
    Container,
    Breadcrumb,
    Row,
} from 'react-bootstrap'

function Search() {

    const navigate = useNavigate();
    const { search } = useLocation();

    const [isLoading, setIsLoading] = useState(false);
    const [albumSearchResult, setAlbumSearchResult] = useState("");
    const [artistSearchResult, setArtistSearchResult] = useState("");
    const [albumResultsArray, setAlbumResultsArray] = useState([])
    const [artistResultsArray, setArtistResultsArray] = useState([])

    useEffect(() => {
        const values = queryString.parse(search);
        if (values.s) {
            fetchAlbumResult(values.s);
        }
    }, []);

    // useEffect(() => {
    //     const values = queryString.parse(search);
    //     if (values.s) {
    //         fetchArtistResult(values.s);
    //     }
    // }, []);

    // useEffect(() => {
    //     const listener = event => {
    //         if (event.code === "Enter" || event.code === "NumpadEnter") {
    //             console.log("Enter key was pressed. Run your function.");
    //             event.preventDefault();
    //             handleOnAlbumClick(albumSearchResult)
    //         }
    //     };
    //     document.addEventListener("keydown", listener);
    //     return () => {
    //         document.removeEventListener("keydown", listener);
    //     };
    // }, []);


    async function fetchAlbumResult(albumSearchResult) {

        setIsLoading(true)

        navigate(`/search?s=${albumSearchResult}`, {
            replace: true,
        });

        try {

            const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
            const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

            let result = await axios.get(
                `https://api.discogs.com/database/search?q=${albumSearchResult}&format=Vinyl&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`, {
                headers: { 'User-Agent': 'CrateDigger/0.1' }
            }
            );

            setAlbumResultsArray(result.data.results)
            setIsLoading(false)

        } catch (e) {

            console.log(e);

        }
    };


    async function fetchArtistResult(artistSearchResult) {

        setIsLoading(true)

        navigate(`/search?s=${artistSearchResult}`, {
            replace: true,
        });

        try {

            const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
            const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

            let result = await axios.get(
                `https://api.discogs.com/database/search?type=artist&q=${artistSearchResult}&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`, {
                headers: { 'User-Agent': 'CrateDigger/0.1' }
            });

            console.log(result.data.results);
            setArtistResultsArray(result.data.results)
            setIsLoading(false)

        } catch (e) {

            console.log(e);

        }
    };

    function handleOnAlbumChange(e) {
        setAlbumSearchResult(e.target.value);
    };

    function handleOnArtistChange(e) {
        setArtistSearchResult(e.target.value);
    };


    async function handleOnArtistClick() {
        fetchArtistResult(artistSearchResult);
    };

    async function handleOnAlbumClick() {
        fetchAlbumResult(albumSearchResult);
    };


    const albumContextValue = {
        albumResultsArray
    }

    const artistContextValue = {
        artistResultsArray
    }

    function handleKeypress(e) {
        if (e.keyCode === 13) {
            handleOnAlbumClick(albumSearchResult);
        }
    }

    return (
        <Container style={{ height: "100vh" }}>
            <Row>
                <Breadcrumb className="breadcrumb-styles">
                    <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/wishlist">Wishlist</Breadcrumb.Item>
                    <Breadcrumb.Item href="/collection">Collection</Breadcrumb.Item>
                    <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            <Row>
                <div >
                    <input
                        name="albumSearchResult"
                        value={albumSearchResult}
                        onChange={handleOnAlbumChange}
                        placeholder="Album Title or Barcode"
                        // onKeyPress={
                        //     (e) => e.key === 'Enter' && handleOnAlbumClick(albumSearchResult)
                        // }
                    />
                    <button onClick={handleOnAlbumClick}>Search</button>
                </div>
                <div >
                    <input
                        name="artistSearchResult"
                        value={artistSearchResult}
                        onChange={handleOnArtistChange}
                        placeholder="Artist"
                    />
                    <button onClick={handleOnArtistClick}>Search</button>
                </div>
                <div >
                    {isLoading ? (
                        <div style={styles.loading}>
                            <Loading />
                        </div>
                    ) : (
                        <AlbumSearchContext.Provider value={albumContextValue}>
                            <AlbumSearchDetails />
                        </AlbumSearchContext.Provider>
                    )}
                </div>
                <div >
                    {isLoading ? (
                        <div style={styles.loading}>
                            <Loading />
                        </div>
                    ) : (
                        <ArtistSearchContext.Provider value={artistContextValue}>
                            <ArtistSearchDetails />
                        </ArtistSearchContext.Provider>
                    )}
                </div>
            </Row>
        </Container>
    )
}

const styles = {

    loading: {
        color: "white",
        height: "100vh",
        paddingTop: "12%",
        fontSize: 80,
        textShadow: "0px 0px 20px darkOrange",
        fontWeight: 900
    },

}
export default Search