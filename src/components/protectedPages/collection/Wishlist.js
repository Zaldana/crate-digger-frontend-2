import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Container from 'react-bootstrap/Container'
import AxiosBackend from '../../../lib/axios/AxiosBackend';

function Wishlist() {

    useEffect(() => {
        fetchWishlist()
    }, [])


    const [wishlistArray, setWishlistArray] = useState([])

    async function fetchWishlist() {

        try {

            let wishlistResult = await AxiosBackend.get(
                'wishlist/',
            );

            setWishlistArray(wishlistResult.data.userWishlist)
            console.log(wishlistResult.data.userWishlist);

        } catch (e) {

            console.log(e);

        }


    }

    async function handleDeleteOnClick(id) {


        try {

            await AxiosBackend.delete(`wishlist/delete-album-by-id/${id}/`);
            
            let wishlistResult = await AxiosBackend.get(
                'wishlist/',
            );
            
            setWishlistArray(wishlistResult.data.userWishlist)


        } catch (e) {

            console.log(e);

        }

    }

    async function handleMoveOnClick(
        objectId,
        albumName,
        albumId,
        albumArtist,
        albumYear,
        albumCountry,
        albumCover,
        albumLabel,
        albumTracklist,
        albumGenre
        ) {
        
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

            await AxiosBackend.delete(`wishlist/delete-album-by-id/${objectId}`);

            let wishlistResult = await AxiosBackend.get(
                'wishlist/',
            );

            setWishlistArray(wishlistResult.data.userWishlist)            

        } catch (e) {

            console.log(e);

        }
       
    }

    return (
        <Container>
            <div>
                <div>
                    <div>
                        <Link to="/search">Dig through crates</Link>
                    </div>
                    <div>
                        <Link to="/profile">Profile</Link>
                    </div>
                    <div>
                        <Link to="/collection">Collection</Link>
                    </div>
                </div>
                <div>
                    this is the wishlist page
                </div>
            </div>
            <div>
                {wishlistArray.map((item) => (
                    <div key={item._id}>
                        <Link
                            to={`/collection-details/${item.albumId}`}
                            state={{
                                albumCover: item.albumCover,
                                id: item.albumId
                            }}
                        >
                            <img src={item.albumCover} />
                        </Link>
                        <h3>{item.albumName}</h3>
                        <h5>Year: {item.albumYear}</h5>
                        <h5>Country: {item.albumCountry}</h5>
                        <h5>Label: {item.albumLabel}</h5>
                        <h5>Condition: {item.albumCondiiton}</h5>

                        <button onClick={() => handleDeleteOnClick(item._id)}>Delete</button>
                        
                        <button onClick={
                            () => handleMoveOnClick(
                                item._id,
                                item.albumName,
                                item.albumId,
                                item.albumArtist,
                                item.albumYear,
                                item.albumCountry,
                                item.albumCover,
                                item.albumLabel,
                                item.albumTracklist,
                                item.albumGenre
                            )}>Move to Collection</button>
                    </div>

                ))}

            </div>
        </Container>
    )
}

export default Wishlist
