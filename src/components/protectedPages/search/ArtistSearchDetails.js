import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { ArtistSearchContext } from '../../../context/SearchContext'

function ArtistSearchDetails() {

    const { artistResultsArray } = useContext(ArtistSearchContext)

    return (
        <div>
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
        </div>
    )
}

export default ArtistSearchDetails
