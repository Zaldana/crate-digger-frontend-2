import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { ArtistSearchContext } from '../../../context/SearchContext'
import './AlbumSearchDetails.css'
import avatar from '../../../images/blank-profile.svg'

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
            <Row xs={1} md={2} lg={3} xl={4}  className="g-0" >
                {artistResultsArray.map((item) => (
                    <CardGroup key={item.id} style={{marginBottom: "15px"}}>
                        <Card
                            key={item.id}
                            className="results-card border-0"
                        >
                            {item.cover_image.includes("spacer") ? (
                            <Link to={`/artist-details/${item.title}`}>
                                <Card.Img
                                        src={avatar}
                                        variant="top"
                                        className="results-image"
                                    />
                                </Link>
                            ) : (
                                    <Link to={`/artist-details/${item.title}`}>
                                        <Card.Img
                                             src ={ item.cover_image }
                                            variant="top"
                                            className="results-image"
                                    />
                                </Link>
                              )}
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
