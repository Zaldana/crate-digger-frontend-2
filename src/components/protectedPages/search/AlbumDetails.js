import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import axios from "axios";
import { toast } from "react-toastify";


function AlbumDetails() {

    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const albumCoverFromState = location.state.albumCover;
    const albumCountryFromState = location.state.albumCountry
    const albumLabelArrayFromState = location.state.albumLabel

    const [albumDetailsArray, setAlbumDetailsArray] = useState([])
    const [albumName, setAlbumName] = useState("")
    const [albumCover, setAlbumCover] = useState("")
    const [albumId, setAlbumId] = useState("")
    const [albumArtist, setAlbumArtist] = useState("")
    const [albumYear, setAlbumYear] = useState(0)
    const [albumCountry, setAlbumCountry] = useState("")
    const [albumLabel, setAlbumLabel] = useState([])
    const [albumTracklist, setAlbumTracklist] = useState([])
    const [albumGenre, setAlbumGenre] = useState([])

    let altId = id;
    let url = "";
    
    if (altId == 0) {
        altId = location.state.id
        url = "https://api.discogs.com/releases/"
    } else {
        url ="https://api.discogs.com/masters/"
    }

    useEffect(() => {

        fetchAlbumDetails(altId)
        setAlbumCover(albumCoverFromState)
        setAlbumId(altId)
        setAlbumCountry(albumCountryFromState)
        setAlbumLabel(albumLabelArrayFromState)
        
    
    }, [])

    async function fetchAlbumDetails(id) {

        try {

            let albumDetailsResult = await axios.get(
                url + id, {
                headers: { 'User-Agent': 'CrateDigger/0.1' }
            });

            let artistArray = albumDetailsResult.data.artists[0]

            setAlbumDetailsArray(albumDetailsResult)
            setAlbumName(albumDetailsResult.data.title)
            setAlbumArtist(artistArray.name)
            setAlbumYear(albumDetailsResult.data.year)
            setAlbumTracklist(albumDetailsResult.data.tracklist)
            setAlbumGenre(albumDetailsResult.data.styles)

        } catch (e) {

            console.log(e);

        }
    };

    async function addToCollection() {

        try {

            let payload = await AxiosBackend.post(
                'collection/add/', {
                    albumName,
                    albumCover,
                    albumId,
                    albumArtist,
                    albumYear,
                    albumCountry,
                    albumLabel,
                    albumTracklist,
                    albumGenre
            });
            
            toast.success("Added To Collection", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            navigate("/collection");

        } catch (e) {

            console.log(e);
         
            
        }
    }

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
            <button onClick={addToCollection}>Add To Collection</button>
        </div>
    )
}

export default AlbumDetails
