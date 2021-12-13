import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import AxiosBackend from '../../../lib/axios/AxiosBackend';

function Collection() {

    useEffect(() => {
        fetchCollection()
    }, [])

    const [collectionArray, setCollectionArray] = useState([])

    async function fetchCollection() {


        try {

            let collectionResult = await AxiosBackend.get(
                'collection/',
            );

            setCollectionArray(collectionResult.data.userCollection)

        } catch (e) {

            console.log(e);

        }


    }

    async function handleDeleteOnClick(id) {


        try {

            await AxiosBackend.delete(`collection/delete-album-by-id/${id}`);
            let collectionResult = await AxiosBackend.get(
                'collection/',
            );

            setCollectionArray(collectionResult.data.userCollection)


        } catch (e) {

            console.log(e);

        }

    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <Link to="/search">Dig through crates</Link>
                    </div>
                    <div>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
                <div>
                    this is the collection page
                </div>
            </div>
            <div>
                {collectionArray.map((item) => (
                    <div key={item._Id}>
                        <Link
                            to={`/album-details/${item.albumId}`}
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

                        <Link to={`/album-edit/${item._id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={()=>handleDeleteOnClick(item._id)}>Delete</button>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Collection
