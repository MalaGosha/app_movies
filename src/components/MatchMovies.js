import React from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import MovieFromGrid from "./MovieFromGrid";
import '../style/grid.css';

export default function MatchMovies({matchMovies}) {
    return (
        <>
            <Navbar/>
            <div className='box_grid'>
                <div className='title_grid'>
                    Match Movies
                </div>
                <div className='grid'>
                    {matchMovies.map(movie =>
                        <div className='movie_grid' key={movie.id}>
                            <Link to={"/main-page/match-movies/" + movie.id}>
                                <MovieFromGrid movie={movie}/>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
