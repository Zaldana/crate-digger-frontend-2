import React from 'react'
import { useParams } from "react-router-dom";
import { useState } from "react";
import AxiosBackend from '../../../lib/axios/AxiosBackend';
import Container from 'react-bootstrap/Container'

function AlbumEdit() {

    const [albumName, setAlbumName] = useState("");
    const { id } = useParams();
    const albumId = id;
    console.log(albumId);
    async function updateAlbumName(albumName) {


        try {

            await AxiosBackend.put(
                `collection/update-album-by-id/${albumId}`,
                {
                    albumName: albumName
                }
            );
        } catch(e) {

            console.log(e);

        }
    }

    function handleAlbumUpdateOnClick() {
        updateAlbumName(albumName);
    };

    function handleAlbumUpdateOnChange(e) {
        setAlbumName(e.target.value)
    }


        return (
            <Container>
                <div className="d-flex justify-content-center ">
                    <div className="input-group mb-3 w-75">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Artist"
                            value={albumName}
                            onChange={handleAlbumUpdateOnChange}
                            aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={handleAlbumUpdateOnClick}
                            >Edit Artist</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center ">
                    <div className="input-group mb-3 w-75">
                        <input type="text" className="form-control" placeholder="Album Name" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Edit Name</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center ">
                    <div className="input-group mb-3 w-75">
                        <input type="text" className="form-control" placeholder="Ex, VG+, Vg..." aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Set Condition</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center ">
                    <div className="input-group mb-3 w-75">
                        <input type="text" className="form-control" placeholder="New image Link, https://..." aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Edit Cover</button>
                        </div>
                    </div>
                </div>

            </Container>
        )
    }

export default AlbumEdit
