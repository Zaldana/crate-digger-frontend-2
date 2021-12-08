import React from 'react'
import { Link } from "react-router-dom";

function Collection() {
    return (
        <div>
            <div>
                this is the collection page
            </div>
            <div>
                <div>
                    <div>
                        <Link to="/search">Dig through crates</Link>
                    </div>
                    <div>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection
