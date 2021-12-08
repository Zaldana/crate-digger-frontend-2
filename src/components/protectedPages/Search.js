import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../common/Loading";

function Search() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState("");

    async function fetchResult(searchResult) {

        setIsLoading(true)

        navigate(`/protected-home?s=${searchResult}`, {
            replace: true,
        });

        try {

            const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
            const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

            let result = await axios.get(
                `https://api.discogs.com/database/search?q=${searchResult}&format=Vinyl&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`
            );

            if (result.data.Error) {

                throw result.data.Error

            } else {

               
            }

        } catch (e) {

           
        }
    };

    function handleOnChange(e) {
        setSearchResult(e.target.value);
    };

    async function handleOnClick() {
        fetchResult(searchResult);
    };


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
