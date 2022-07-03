import React, {useEffect, useState} from "react";
import {getSearchMovies} from "../api/getSearchMovie";
import MatchMovies from "./MatchMovies";
import {Link} from "react-router-dom";
import '../style/navbar.css';

export default function Search() {
    const [searchField, setSearchField] = useState();
    const [matchMovies, setMatchMovie] = useState([]);
    const [state, setState] = useState(true);

    useEffect(() => {
        getSearchMovies(searchField).then(arrayMatchMovies => {
            let searchMovies = [];
            searchMovies.push(arrayMatchMovies);
            setMatchMovie(searchMovies);
        })
    }, []);

    let handleChange = e => {
        setSearchField(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("I got this!")
    }

    let handleClick = () => {
        setState(false);
    }

    console.log(searchField)
    console.log(matchMovies)

    return (state) ? (
            <form className='search_engine' onSubmit={handleSubmit}>
                <input className='search' type='text' placeholder='Enter a title to search for a movie'
                       onChange={handleChange}/>
                <button className='btn_search' onClick={handleClick}>
                    search
                </button>
            </form>

    ) : (
        <Link to={'/main-page/match-movies/movie-details/' + matchMovies.id}>
            <MatchMovies matchMovies={matchMovies}/>
        </Link>
    );
}

