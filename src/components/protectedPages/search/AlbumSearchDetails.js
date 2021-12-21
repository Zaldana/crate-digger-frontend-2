import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AlbumSearchContext } from '../../../context/SearchContext'
import './AlbumSearchDetails.css'
import record from "../../../images/blank-album.svg"

import {
    Row,
    Container,
    CardGroup,
    Card,
} from 'react-bootstrap'

function AlbumSearchDetails() {
    
    const { albumResultsArray } = useContext(AlbumSearchContext)

    return (
        <Container fluid="true" className="results-container">
            <Row xs={1} md={2} lg={3} xl={4}  className="g-0" >
         
                {albumResultsArray.map((item) => (
                    <CardGroup key={item.id} style={{marginBottom: "15px"}}>
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
            <Row>
                
            </Row>
        </Container>
    )
}

export default AlbumSearchDetails
