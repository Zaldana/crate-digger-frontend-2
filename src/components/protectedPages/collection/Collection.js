import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

function Collection() {

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [])

    async function fetchCollection() {

    
    try {

        await AxiosBackend.get(
            'collection/',
            {
                firstName,
                lastName,
                username,
                email,
                password,
            }
        );

        toast.success("Congrats~! now you please sign in", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        navigate("users/sign-in");

    } catch (e) {

        toast.error(e.response.data.error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

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
        </div>
    )
}

export default Collection
