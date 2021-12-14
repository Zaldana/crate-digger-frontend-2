import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import { ArtistSearchContext } from '../../../context/SearchContext'

function ArtistSearchDetails() {

    const { artistResultsArray } = useContext(ArtistSearchContext)

    return (
        <Container>
            <div>
                {artistResultsArray.map((item) => (
                    <div key={item.id}>
                        <Link
                            to={`/artist-details/${item.title}`}
                        >
                            <img src={item.thumb} />
                        </Link>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default ArtistSearchDetails
