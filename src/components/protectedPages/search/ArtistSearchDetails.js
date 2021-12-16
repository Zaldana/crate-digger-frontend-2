import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { ArtistSearchContext } from '../../../context/SearchContext'
import './AlbumSearchDetails.css'

import {
    Row,
    Container,
    CardGroup,
    Card,
} from 'react-bootstrap'

function ArtistSearchDetails() {

    const { artistResultsArray } = useContext(ArtistSearchContext)

    return (
        <Container fluid="true" className="results-container">
            <Row xs={1} md={5} lg={6} className="g-0" >
                
                {artistResultsArray.map((item) => (
                    <CardGroup style={{marginBottom: "15px"}}>
                        <Card
                            key={item.id}
                            className="results-card border-0"
                        >
                            <Link to={`/artist-details/${item.title}`}>
                                <Card.Img
                                    src={item.cover_image}
                                    variant="top"
                                    style={{
                                        height: "225px",
                                        objectFit: "cover",
                                        boxShadow: "0px 7px 5px rgba(27, 27, 27, 0.842)"
                                    }}
                                />
                            </Link>
                             <Card.Body className="results-card-body">
                                <Card.Title>{item.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                ))}
            </Row>
        </Container>
    )
}

export default ArtistSearchDetails
