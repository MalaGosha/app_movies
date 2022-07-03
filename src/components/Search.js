import React, {useContext, useEffect, useState} from "react";
import {getSearchMovies} from "../api/getSearchMovie";
import '../style/navbar.css';
import {MovieContext} from "../MovieContext";

export default function Search() {
    const [searchField, setSearchField] = useState();
    const {matchMovies, setMatchMovies} = useContext(MovieContext);

    useEffect(() => {
        getSearchMovies(searchField).then(arrayMatchMovies => {
            setMatchMovies(arrayMatchMovies.results);
            console.log(matchMovies);
        })
    }, [searchField]);

    const handleChange = e => {
        setSearchField(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
            <form className='search_engine' onSubmit={handleSubmit}>
                <input className='search' type='text' placeholder='Enter a title to search for a movie'
                       onChange={handleChange}/>
            </form>
    )
}

