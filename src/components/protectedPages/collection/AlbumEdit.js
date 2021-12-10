import React from 'react'
import { useParams } from "react-router-dom";

function AlbumEdit() {

    const { id } = useParams();

    return (
        <div>
            this is the album edit page
        </div>
    )
}

export default AlbumEdit
