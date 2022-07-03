import React, {useContext} from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import MovieFromGrid from "./MovieFromGrid";
import '../style/grid.css';
import {MovieContext} from "../MovieContext";

export default function MatchMovies() {

    const {matchMovies} = useContext(MovieContext);

    return (
        <>
            <Navbar/>
            <div className='box_grid'>
                <div className='title_grid'>
                    Match Movies
                </div>
                <div className='grid'>
                    {matchMovies?.map(movie =>
                        (<div className='movie_grid' key={movie.id}>
                            <Link to={"/main-page/match-movies/" + movie.id}>
                                <MovieFromGrid movie={movie}/>
                            </Link>
                        </div>)
                    )}
                </div>
            </div>
        </>
    );
}
