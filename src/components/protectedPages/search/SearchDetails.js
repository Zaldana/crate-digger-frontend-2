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

        try {

            let payload = await AxiosBackend.post(

                "movie/add-movie/",

                {
                    movieTitle,
                    moviePoster,
                    imdbID,
                    rating,
                },
            );

            let newFavoriteArray = [...favoriteMovies, payload.data.favoriteMovie]
            setFavoriteMovies(newFavoriteArray)

        } catch (e) {

            console.log(e.response);

        }

    }


    return (
        <div>
            <div>
            {resultsArray.map((item) => (
                <div key={item.id}>
                    <img src={item.thumb} />
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
