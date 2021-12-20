import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import "./Collection.css"

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

function Collection() {

    useEffect(() => {
        fetchCollection()
    }, [])

    const [collectionArray, setCollectionArray] = useState([])
    const [searchCollectionArray, setSearchCollectionArray] = useState([])
    const [collectionSearchResult, setCollectionSearchResult] = useState("");

    async function fetchCollection() {

        try {

            let collectionResult = await AxiosBackend.get(
                'collection/',
            );

            setCollectionArray(collectionResult.data.userCollection)
            setSearchCollectionArray(collectionResult.data.userCollection)

        } catch (e) {

            console.log(e);

        }
    }

    async function handleDeleteOnClick(id) {

        try {

            await AxiosBackend.delete(`collection/delete-album-by-id/${id}/`);
            let collectionResult = await AxiosBackend.get(
                'collection/',
            );
           
            setCollectionArray(collectionResult.data.userCollection)

            toast.error("Removed from Collection", {
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

    function fetchSearchResults(collectionSearchResults) {

        const filteredArray = searchCollectionArray.filter(
            item => item.albumArtist.toString().toLowerCase().includes(collectionSearchResult.toString().toLowerCase()) ||
                item.albumName.toString().toLowerCase().includes(collectionSearchResult.toString().toLowerCase()));

        setCollectionArray(filteredArray)

    };

    function handleOnCollectionChange(e) {
        setCollectionSearchResult(e.target.value);
    };

    async function handleOnCollectionClick() {
        fetchSearchResults(collectionSearchResult);
    };

    return (
        <Container className="results-container">
            <Row className="g-0">
                <Breadcrumb className="breadcrumb-styles">
                    <Breadcrumb.Item href="/protected-home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/album-search">Album Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/artist-search">Artist Search</Breadcrumb.Item>
                    <Breadcrumb.Item href="/wishlist">Wishlist</Breadcrumb.Item>
                    <Breadcrumb.Item active>Collection</Breadcrumb.Item>
                    <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
                </Breadcrumb>
            </Row>

            < Row className="g-0">
                <InputGroup className="input-spacing">
                    <FormControl
                        name="collectionSearchResult"
                        value={collectionSearchResult}
                        onChange={handleOnCollectionChange}
                        placeholder="Search Your Collection"
                    />
                    <Button variant="success" onClick={handleOnCollectionClick}>Search Collection</Button>
                </InputGroup>
            </Row>
            
            <Row xs={1} md={2} lg={3} xl={4} className="g-0 results-row" >

                {collectionArray.map((item) => (
                    <CardGroup key={item._id} style={{ marginBottom: "15px" }}>
                        <Card
                            className="results-card border-0"
                            key={item._id}
                        >
                            <Link
                                to={`/collection-details/${item._id}`}
                                state={{
                                    albumCover: item.albumCover,
                                    albumCountry: item.albumCountry,
                                    albumLabel: item.albumLabel,
                                    albumId: item.albumId,
                                    albumName: item.albumName,
                                    albumArtist: item.albumArtist,
                                    albumYear: item.albumYear,
                                    albumTracklist: item.albumTracklist,
                                    albumGenre: item.albumGenre,
                                    albumNotes: item.albumNotes,
                                    albumCondition: item.albumCondition
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
                                <Card.Text className="text-size">Condition: {item.albumCondition}</Card.Text>
                            </Card.Body>
                            <Container
                                fluid="true"
                                className="button-container"
                            >
                                <Button
                                    className="border-0 edit-button"
                                    varient="success"
                                    href={`/album-edit/${item._id}`}
                                >Edit
                                </Button>
                                <Button
                                    className="border-0 delete-button"
                                    varient="danger"
                                    onClick={() => handleDeleteOnClick(item._id)}
                                >Delete</Button>
                            </Container>
                            <br/>
                        </Card>
                    </CardGroup>
                ))}
            </Row>
        </Container>
    )
}

export default Collection