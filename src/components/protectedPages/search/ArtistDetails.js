import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import './AlbumSearchDetails.css'
import record from "../../../images/blank-album.svg"

import {
    Row,
    Container,
    CardGroup,
    Card,
    Breadcrumb,
} from 'react-bootstrap'

function ArtistDetails() {

    const { artist } = useParams();

    useEffect(() => {
        fetchArtistDetails(artist)
    }, [])

    const [releaseResultArray, setReleaseResultArray] = useState([])

    async function fetchArtistDetails(artist) {

        try {

            let result = await AxiosBackend.get(
                `discogs/artist-details:${artist}`
            );

        setReleaseResultArray(result.data.results)
    
        } catch (e) {

            console.log(e);
        }
    };

    return (
        <Container className="results-container">
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
            <Row xs={1} md={2} lg={5} className="g-0" style={{ paddingTop: "40px"}} >
        
                {releaseResultArray.map((item) => (
                    <CardGroup key={item.id} style={{ marginBottom: "15px" }}>
                        <Card
                            key={item.id}
                            className="results-card border-0"
                        >
                            {item.cover_image.includes("spacer") ? (
                                <Link
                                    to={`/album-details/${item.master_id}`}
                                    state={{
                                        albumCover: record,
                                        albumCountry: item.country,
                                        albumLabel: item.label,
                                        albumId: item.id
                                    }}
                                >
                                    <Card.Img
                                        src={record}
                                        variant="top"
                                        className="results-image"
                                    />
                                </Link>
                            ) : (
                                <Link
                                    to={`/album-details/${item.master_id}`}
                                    state={{
                                        albumCover: item.cover_image,
                                        albumCountry: item.country,
                                        albumLabel: item.label,
                                        albumId: item.id
                                    }}
                                >
                                    <Card.Img
                                        src={item.cover_image}
                                        variant="top"
                                        className="results-image"
                                    />
                                </Link>
                            )}
                            <Card.Body className="results-card-body">
                                <Card.Title className="text-title">{item.title}</Card.Title>
                                <Card.Text className="text-size">Year: {item.year}<br />Country: {item.country}</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                ))}
            </Row>
        </Container>
    )
}

export default ArtistDetails
