import React, { useContext } from 'react'
import { SearchContext } from '../../../context/SearchContext'
import { Link } from "react-router-dom";

function SearchDetails() {

    const {
        resultsArray,
    } = useContext(SearchContext)

    async function handleOnClick(
        albumName,
        albumCover, 
        albumId,
        albumArtist,
        albumYear,
        albumLabel,
    ) {

        fetchAlbumDetails(
            albumName,
            albumCover,
            albumId,
            albumArtist,
            albumYear,
            albumLabel,
        )
    }

    const albumDetailsValue = {
        resultsArray
    }


    return (
        <div>
            <div>
            {resultsArray.map((item) => (
                <div key={item.id}>
                    <SearchContext.Provider value={SearchContextValue}>
                        <Link to="/album-details" onClick={ ()=> handleOnClick }>
                            <img src={item.thumb} />
                        </Link>
                    </SearchContext.Provider>
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

export default SearchDetails
