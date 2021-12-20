import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import "./Wishlist.css"

import {
    Row,
    Container,
    CardGroup,
    Card,
    Breadcrumb,
    Button,
    InputGroup,
    FormControl,
} from 'react-bootstrap'

function Wishlist() {

    useEffect(() => {
        fetchWishlist()
    }, [])


    const [wishlistArray, setWishlistArray] = useState([])
    const [searchWishlistArray, setSearchWishlistArray] = useState([])
    const [wishlistSearchResult, setWishlistSearchResult] = useState("");

    async function fetchWishlist() {

        try {

            let wishlistResult = await AxiosBackend.get(
                'wishlist/',
            );

            setWishlistArray(wishlistResult.data.userWishlist)
            setSearchWishlistArray(wishlistResult.data.userWishlist)

        } catch (e) {

            console.log(e);

        }

    }

    async function handleDeleteOnClick(id) {

        try {

            await AxiosBackend.delete(`wishlist/delete-album-by-id/${id}/`);
            
            let wishlistResult = await AxiosBackend.get(
                'wishlist/',
            );
            
            setWishlistArray(wishlistResult.data.userWishlist)

            toast.error("Removed from Wishlist", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } catch (e) {

            console.log(e);

        }
    }

    async function handleMoveOnClick(
        objectId,
        albumName,
        albumId,
        albumArtist,
        albumYear,
        albumCountry,
        albumCover,
        albumLabel,
        albumTracklist,
        albumGenre
        ) {
        
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

            toast.success(`Added ${albumName} To Collection`, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            await AxiosBackend.delete(`wishlist/delete-album-by-id/${objectId}`);

            let wishlistResult = await AxiosBackend.get(
                'wishlist/',
            );

            setWishlistArray(wishlistResult.data.userWishlist)            

        } catch (e) {

            console.log(e);

        }
    }

    function fetchSearchResults(wishlistSearchResults) {

        const filteredArray = searchWishlistArray.filter(
            item => item.albumArtist.toString().toLowerCase().includes(wishlistSearchResult.toString().toLowerCase()) ||
                item.albumName.toString().toLowerCase().includes(wishlistSearchResult.toString().toLowerCase()));

        setWishlistArray(filteredArray)

    };

    function handleOnChange(e) {
        setWishlistSearchResult(e.target.value);
    };

    async function handleOnClick() {
        fetchSearchResults(wishlistSearchResult);
    };

    return (
        <Container className="results-container">
            <Row className="g-0">
                <Breadcrumb className="breadcrumb-styles">
                    <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/album-search">Album Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/artist-search">Artist Search</Breadcrumb.Item>
                    <Breadcrumb.Item active>Wishlist</Breadcrumb.Item>
                    <Breadcrumb.Item href="/collection">Collection</Breadcrumb.Item>
                    <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            < Row className="g-0">
                <InputGroup className="input-spacing">
                    <FormControl
                        name="wishlistSearchResult"
                        value={wishlistSearchResult}
                        onChange={handleOnChange}
                        placeholder="Search Your Wishlist"
                    />
                    <Button variant="success" onClick={handleOnClick}>Search Wishlist</Button>
                </InputGroup>
            </Row>

            <Row xs={1} md={2} lg={3} xl={4} className="g-0 results-row" >
                {wishlistArray.map((item) => (
                    <CardGroup key={item._id} style={{ marginBottom: "15px" }}>
                        <Card
                            key={item._id}
                            className="results-card border-0"
                        >
                            <Link
                                to={`/album-details/${item.albumId}`}
                                state={{
                                    albumCover: item.albumCover,
                                    albumId: item.albumId,
                                    albumCountry: item.albumCountry,
                                    albumLabel: item.albumLabel,
                                    from: "wishlist"
                                }}
                            >
                                <Card.Img
                                    src={item.albumCover}
                                    variant="top"
                                    className="results-image"
                                />
                            </Link>
                            <Card.Body className="results-card-body">
                                <Card.Title className="text-title">{item.albumName}</Card.Title>
                                <Card.Text className="text-size"><b>{item.albumArtist}</b></Card.Text>
                                <Container>
                            
                                    <Button
                                        onClick={() => handleMoveOnClick(
                                            item._id,
                                            item.albumName,
                                            item.albumId,
                                            item.albumArtist,
                                            item.albumYear,
                                            item.albumCountry,
                                            item.albumCover,
                                            item.albumLabel,
                                            item.albumTracklist,
                                            item.albumGenre
                                        )}
                                        className="border-0 add-to-collection"
                                        varient="info"
                                    >Add to Collection</Button>

                                    <Button
                                        onClick={() => handleDeleteOnClick(item._id)}
                                        className="border-0 delete"
                                        varient="danger"
                                    >Delete</Button>

                                </Container>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                ))}
       </Row>
        </Container>
    )
}

export default Wishlist
