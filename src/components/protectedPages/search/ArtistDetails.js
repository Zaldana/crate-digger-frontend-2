import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function ArtistDetails() {

    const { artist } = useParams();

    useEffect(() => {
        fetchArtistDetails(artist)
    }, [])

    const [releaseResultArray, setReleaseResultArray] = useState([])

    async function fetchArtistDetails(artist) {

        try {

            const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
            const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

            let result = await axios.get(
                `https://api.discogs.com/database/search?format=Vinyl&type=master&artist=${artist}&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`, {
                headers: { 'User-Agent': 'CrateDigger/0.1' }
                }
            );

        setReleaseResultArray(result.data.results)
        console.log(result.data.results);
    
    } catch (e) {

        console.log(e);

    }
};

    return (
            <div>
                <div>
                    {releaseResultArray.map((item) => (
                        <div key={item.id}>
                            <Link
                                to={`/album-details/${item.master_id}`}
                                state={{
                                    albumCover: item.cover_image,
                                    id: item.id,
                                    albumCountry: item.country,
                                    albumLabel: item.label
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

export default ArtistDetails
