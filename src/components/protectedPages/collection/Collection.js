import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
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

    async function fetchCollection() {


        try {

            let collectionResult = await AxiosBackend.get(
                'collection/',
            );

            setCollectionArray(collectionResult.data.userCollection)

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
           

        } catch (e) {

            console.log(e);

        }

    }

    return (
        <Container className="results-container">
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

            < Row className="g-0">
                <InputGroup className="input-spacing">
                    <FormControl
                        name="collectionSearchResult"
                        value=""
                        onChange=""
                        placeholder="Search Collection"
                    />
                    <Button onClick="">Search</Button>
                </InputGroup>
            </Row>
            
            <Row xs={1} md={3} lg={4} className="g-0 results-row" >

                {collectionArray.map((item) => (
                    <CardGroup style={{ marginBottom: "15px" }}>
                        <Card
                            key={item._id}
                            className="results-card border-0"
                        >
                            <Link
                                to={`/collection-details/${item.albumId}`}
                                state={{
                                    albumCover: item.cover_image,
                                    id: item.albumId
                                }}
                            >
                                <Card.Img
                                    src={item.albumCover}
                                    variant="top"
                                    className="results-image"
                                    style={{
                                        minHeight: "180px",
                                        maxHeight: "300px",
                                        objectFit: "cover"
                                    }}
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
                                    varient="primary"
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
            {/* <div>
                {collectionArray.map((item) => (
                    <div key={item._id}>
                        <Link
                            to={`/collection-details/${item.albumId}`}
                            state={{
                                albumCover: item.albumCover,
                                id: item.albumId
                            }}
                        >
                            <img src={item.albumCover} />
                        </Link>
                        <h3>{item.albumName}</h3>
                        <h5>Year: {item.albumYear}</h5>
                        <h5>Country: {item.albumCountry}</h5>
                        <h5>Label: {item.albumLabel}</h5>
                        <h5>Condition: {item.albumCondiiton}</h5>

                        <Link to={`/album-edit/${item._id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={()=>handleDeleteOnClick(item._id)}>Delete</button>
                    </div>

                ))}

            </div> */}
        </Container>
    )
}

export default Collection
