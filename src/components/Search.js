import React, {useEffect, useState} from "react";
import {getSearchMovies} from "../api/getSearchMovie";
import MatchMovies from "./MatchMovies";
import {Link} from "react-router-dom";
import '../style/navbar.css';

export default function Search() {
    const [searchField, setSearchField] = useState();
    const [matchMovies, setMatchMovies] = useState([]);

    useEffect(() => {
        // getSearchMovies(searchField).then(arrayMatchMovies => {
        //     const searchMovies = [];
        //     searchMovies.push(arrayMatchMovies);
        //     setMatchMovies(searchMovies);
        // })
        console.log("AAA");
    }, [searchField]);

    const handleChange = e => {
        setSearchField(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClick = () => {

    }

    return (
            <form className='search_engine' onSubmit={handleSubmit}>
                <input className='search' type='text' placeholder='Enter a title to search for a movie'
                       onChange={handleChange}/>
                <Link to={'/main-page/match-movies/movie-details/' + matchMovies.id}>
                <button className='btn_search' onClick={handleClick}>
                    search
                </button>
                </Link>
            </form>
    )

}

