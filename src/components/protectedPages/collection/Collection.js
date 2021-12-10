import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
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

        setCollectionArray(collectionResult.data.allCollection)
        console.log(collectionResult.data.allCollection);


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
                    <div key={item.albumId}>
                        <Link
                            to={`/album-details/${item.albumId}`}
                            state={{
                                albumCover: item.albumCover,
                                id: item.albumId
                            }}
                        >
                            <img src={item.albumThumb} />
                        </Link>
                        <h3>{item.albumName}</h3>
                        <h5>Year: {item.albumYear}</h5>
                        <h5>Country: {item.albumCountry}</h5>
                        <h5>Label: {item.albumLabel}</h5>
                        <h5>Condition: {item.albumCondiiton}</h5>
                    </div>
                ))}
                <button>Edit</button>
            </div>
        </div>
    )
}

export default Collection
