import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { AlbumSearchContext } from '../../../context/SearchContext'


function AlbumSearchDetails() {
    
    const { albumResultsArray } = useContext(AlbumSearchContext)

    return (
        <div>
            <div>
                {albumResultsArray.map((item) => (
                <div key={item.id}>
                        <Link
                        to={`/album-details/${item.master_id}`}
                        state={{
                            albumCover: item.cover_image,
                            id: item.id
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
        </div>

    )
}

export default AlbumSearchDetails
