import React from 'react'
import { Link } from "react-router-dom";

function ProtectedHome() {
    return (
        <div>
            <div>
                this is the protected Home
            </div>
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
                    <div>
                        <Link to="/wishlist">Wishlist</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProtectedHome
