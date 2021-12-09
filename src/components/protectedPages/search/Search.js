import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext"
import Loading from "../../common/Loading";
import SearchDetails from './SearchDetails';

function Search() {

    const navigate = useNavigate();
    const { search } = useLocation();

    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState("");
    
    //search results
    // const [artist, setArtist] = useState("");
    // const [cover, setCover] = useState("");
    // const [year, setYear] = useState("");
    // const [label, setLabel] = useState("");
    // const [albumName, setAlbumName] = useState("");
    // const [albumId, setAlbumId] = useState(0)
    const [resultsArray, setResultsArray] = useState([])

    useEffect(() => {
        const values = queryString.parse(search);
        if (values.s) {
            fetchResult(values.s);
        }
    }, []);

    async function fetchResult(searchResult) {

        setIsLoading(true)

        navigate(`/search?s=${searchResult}`, {
            replace: true,
        });

        try {

            const CONSUMER_KEY = process.env.REACT_APP_DISCOGS_CONSUMER_KEY;
            const CONSUMER_SECRET = process.env.REACT_APP_DISCOGS_CONSUMER_SECRET;

            let result = await axios.get(
                `https://api.discogs.com/database/search?q=${searchResult}&format=Vinyl&key=${CONSUMER_KEY}&secret=${CONSUMER_SECRET}`
            );

            setResultsArray(result.data.results)
            setIsLoading(false)

            console.log("results",resultsArray);

        } catch (e) {

            console.log(e);
           
        }
    };

    function handleOnChange(e) {
        setSearchResult(e.target.value);
    };

    async function handleOnClick() {
        fetchResult(searchResult);
    };

    const SearchContextValue = {
        resultsArray
    }

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

                <div >
                    <input
                        name="searchResult"
                        value={searchResult}
                        onChange={handleOnChange}
                        placeholder="Artist, Album, Barcode"
                    />
                    <button onClick={handleOnClick}>Search</button>
                </div>
                <div >
                    {isLoading ? (
                        <div style={styles.loading}>
                            <Loading />
                        </div>
                    ) : (
                        <SearchContext.Provider value={SearchContextValue}>
                            <SearchDetails />
                        </SearchContext.Provider>
                    )}
                </div>
            
            </div>
        </div>
    )
}

const styles = {

    loading: {
        color: "white",
        height: "100vh",
        paddingTop: "12%",
        fontSize: 80,
        textShadow: "0px 0px 20px darkOrange",
        fontWeight: 900
    },

}
export default Search
