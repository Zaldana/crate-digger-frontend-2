import React from 'react'
import { Link } from "react-router-dom";

function Profile() {
    return (
        <div>
            <div>
                this is the profile
            </div>
            <div>
                <div>
                    <div>
                        <Link to="/search">Dig through crates</Link>
                    </div>
                    <div>
                        <Link to="/collection">Collection</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile