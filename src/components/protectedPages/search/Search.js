// import React from 'react'
// import { useState, useEffect } from "react";
// import axios from "axios";
// import queryString from "query-string";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { ArtistSearchContext, AlbumSearchContext } from "../../../context/SearchContext"
// import Loading from "../../common/Loading";
// import AlbumSearchDetails from './AlbumSearchDetails';
// import ArtistSearchDetails from './ArtistSearchDetails'
// import './Search.css'

// import {
//     Container,
//     Breadcrumb,
//     Row,
//     InputGroup,
//     Button,
//     FormControl
// } from 'react-bootstrap'

// function Search() {

//     const navigate = useNavigate();
//     const { search } = useLocation();

//     const [isLoading, setIsLoading] = useState(false);
//     const [albumSearchResult, setAlbumSearchResult] = useState("");
//     const [artistSearchResult, setArtistSearchResult] = useState("");
//     const [albumResultsArray, setAlbumResultsArray] = useState([])
//     const [artistResultsArray, setArtistResultsArray] = useState([])

//     useEffect(() => {

//         let values = queryString.parse(search);
        
//             if (values.s) {
//                 fetchAlbumResult(values.s);
//             }
        
//     }, []);

//     useEffect(() => {
//         const values = queryString.parse(search);
//         if (values.s) {
//             fetchArtistResult(values.s);
//         }
//     }, []);

//     async function fetchAlbumResult(albumSearchResult) {

//         setIsLoading(true)

//         navigate(`/search?s=${albumSearchResult}`, {
//             replace: true,
//         });

//         try {

//             const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
//             const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

//             let result = await axios.get(
//                 `https://api.discogs.com/database/search?q=${albumSearchResult}&format=Vinyl&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`, {
//                 headers: { 'User-Agent': 'CrateDigger/0.1' }
//             }
//             );

//             setAlbumResultsArray(result.data.results)
//             setIsLoading(false)

//         } catch (e) {

//             console.log(e);

//         }
//     };


//     async function fetchArtistResult(artistSearchResult) {

//         setIsLoading(true)

//         navigate(`/search?s=${artistSearchResult}`, {
//             replace: true,
//         });

//         try {

//             const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
//             const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

//             let result = await axios.get(
//                 `https://api.discogs.com/database/search?type=artist&q=${artistSearchResult}&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`, {
//                 headers: { 'User-Agent': 'CrateDigger/0.1' }
//             });

//             setArtistResultsArray(result.data.results)
//             setIsLoading(false)

//         } catch (e) {

//             console.log(e);

//         }
//     };

//     function handleOnAlbumChange(e) {
//         setAlbumSearchResult(e.target.value);
//     };

//     function handleOnArtistChange(e) {
//         setArtistSearchResult(e.target.value);
//     };


//     async function handleOnArtistClick() {
        
//         fetchArtistResult(artistSearchResult);
//     };

//     async function handleOnAlbumClick() {
//         fetchAlbumResult(albumSearchResult);
//     };


//     const albumContextValue = {
//         albumResultsArray
//     }

//     const artistContextValue = {
//         artistResultsArray
//     }

//     return (
//         <Container style={{ height: "100vh" }}>
//             <Row className="g-0">
//                 <Breadcrumb className="breadcrumb-styles">
//                     <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
//                     <Breadcrumb.Item active>Search</Breadcrumb.Item>
//                     <Breadcrumb.Item href="/wishlist">Wishlist</Breadcrumb.Item>
//                     <Breadcrumb.Item href="/collection">Collection</Breadcrumb.Item>
//                     <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
//                 </Breadcrumb>
//             </Row>

//             <Row className="g-0">
//                 <InputGroup className="input-spacing">
//                     <FormControl
//                         name="albumSearchResult"
//                         value={albumSearchResult}
//                         onChange={handleOnAlbumChange}
//                         placeholder="Album Title or Barcode"
//                     />
//                     <Button onClick={handleOnAlbumClick}>Search</Button>
//                 </InputGroup>
                
//                 <InputGroup className="input-spacing">
//                     <FormControl
//                         name="artistSearchResult"
//                         value={artistSearchResult}
//                         onChange={handleOnArtistChange}
//                         placeholder="Artist"
//                     />
//                     <Button onClick={handleOnArtistClick}>Search</Button>
//                 </InputGroup>
//             </Row>
            
//                 <Row className="results-row g-0">
//                     {isLoading ? (
//                         <Container className="loading-container">
//                             <Loading />
//                         </Container>
//                     ) : (
//                         <AlbumSearchContext.Provider value={albumContextValue}>
//                             <AlbumSearchDetails />
//                         </AlbumSearchContext.Provider>
//                     )}
//                 </Row>
//                 <Row className="results-row g-0">
//                     {isLoading ? (
//                         <Container className="loading-container">
//                             <Loading />
//                         </Container>
//                     ) : (
//                         <ArtistSearchContext.Provider value={artistContextValue}>
//                             <ArtistSearchDetails />
//                         </ArtistSearchContext.Provider>
//                     )}
//                 </Row>
            
//         </Container>
//     )
// }

// export default Search