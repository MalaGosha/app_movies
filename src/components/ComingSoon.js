import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MovieFromGrid from "./MovieFromGrid";
import {getMoviesComingSoon} from "../api/getMoviesComingSoon";
import '../style/grid.css';

export default function ComingSoon() {
    const [moviesComingSoon, setMoviesComingSoon] = useState([]);

    useEffect(() => {
        getMoviesComingSoon().then(movies => {
            let items = movies.items;
            setMoviesComingSoon(items);
        })
    }, [])

    return (
        <>
            <Navbar/>
            <div className='box_grid'>
                <div className='title_grid'>
                    Coming Soon
                </div>
                <div className='grid'>
                    {moviesComingSoon.map(movie =>
                        <div className='movie_grid' key={movie.id}>
                            <Link to={"/main-page/coming-soon/movie-details/" + movie.id}>
                                <MovieFromGrid movie={movie}/>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

