import React from 'react'
import { Link } from "react-router-dom";

function Search() {
    return (
        <div>
            <div>
                this is the search page
            </div>
            <div>
                <div>
                    <div>
                        <Link to="/collection">Collection</Link>
                    </div>
                    <div>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
