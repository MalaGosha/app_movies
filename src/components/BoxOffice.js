import React, { useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import {getMoviesBoxOffice} from "../api/getMoviesBoxOffice";
import MovieFromGrid from "./MovieFromGrid";
import Navbar from "./Navbar";
import '../style/grid.css';


export default function BoxOffice() {
    const [moviesInCinemas, setMoviesInCinemas] = useState([]);

    useEffect(() => {
        getMoviesBoxOffice().then(movies => {
            let items = movies.items;
            setMoviesInCinemas(items);
        })
    }, [])

    return (
        <>
            <Navbar/>
            <div className='box_grid'>
                <div className='title_grid'>
                    In cinemas
                </div>
                <div className='grid'>
                    {moviesInCinemas.map(movie =>
                        <div className='movie_grid' key={movie.id}>
                            <Link to={"/main-page/in-cinemas/movie-details/" + movie.id}>
                                <MovieFromGrid movie={movie}/>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
