import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

function ArtistDetails() {

    const { artist } = useParams();

    useEffect(() => {
        fetchArtistDetails(artist)
    }, [])

    async function fetchArtistDetails(artist) {

    try {

        const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
        const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

        let result = await axios.get(
            `https://api.discogs.com/database/search?format=Vinyl&type=master&artist=${artist}&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`, {
            headers: { 'User-Agent': 'CrateDigger/0.1' }
        }
        );


        console.log(result);

    } catch (e) {

        console.log(e);

    }
};

    return (
        <div>
            
        </div>
    )
}

export default ArtistDetails
