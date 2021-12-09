import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";


function AlbumDetails() {

    const { id } = useParams();
    const location = useLocation();

    console.log(location.state.albumCover);

    const [albumDetailsArray, setAlbumDetailsArray] = useState([])

    useEffect(() => {
      fetchAlbumDetails(id)
    }, [])

    async function fetchAlbumDetails(id) {

        try {

            let albumDetailsResult = await axios.get(
                `https://api.discogs.com/releases/${id}`, {
                headers: { 'User-Agent': 'CrateDigger/0.1' }
            }
            );

            setAlbumDetailsArray(albumDetailsResult)

            
        } catch (e) {

            console.log(e);

        }
    };

    console.log(albumDetailsArray);

    return (
        <div>
            this is the album details
        </div>
    )
}

export default AlbumDetails
