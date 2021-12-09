import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


function AlbumDetails() {

    const { id } = useParams();
    const location = useLocation();

    const albumCover = location.state.albumCover;

    const [albumDetailsArray, setAlbumDetailsArray] = useState([])

    console.log(id);

    useEffect(() => {
      fetchAlbumDetails(id)
    }, [])

    async function fetchAlbumDetails(id) {

        try {

            let albumDetailsResult = await axios.get(
                `https://api.discogs.com/masters/${id}`, {
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
            <div>
                <div>
                    <Link to="/search">Dig through crates</Link>
                </div>
                <div>
                    <Link to="/collection">Collection</Link>
                </div>
                <div>
                    <Link to="/profile">Profile</Link>
                </div>
            </div>
            <div>
                this is the album details
            </div>
            <div>
                <img src={albumCover}></img>
            </div>
        </div>
    )
}

export default AlbumDetails
