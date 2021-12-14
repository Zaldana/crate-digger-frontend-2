import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import { AlbumSearchContext } from '../../../context/SearchContext'


function AlbumSearchDetails() {
    
    const { albumResultsArray } = useContext(AlbumSearchContext)
    console.log(albumResultsArray);

    return (
        <Container>
            <div>
                {albumResultsArray.map((item) => (
                <div key={item.id}>
                        <Link
                        to={`/album-details/${item.master_id}`}
                        state={{
                            albumCover: item.cover_image,
                            albumCountry: item.country,
                            albumLabel: item.label,
                            albumId: item.id
                        }}
                        >
                            <img src={item.thumb} />
                        </Link>
                    <h3>{item.title}</h3>
                    <h5>Year: {item.year}</h5>
                    <h5>Country: {item.country}</h5>
                    <h5>Label: {item.label}</h5>
                </div>
            ))} 
            </div>
        </Container>

    )
}

export default AlbumSearchDetails
