import React from "react";
import {useState, useEffect} from "react";
import {getRandomMovies} from "../api/getRandomMovies";
import MovieFromGrid from "./MovieFromGrid";
import {Link} from 'react-router-dom';
import "../style/grid.css";

export default function RandomMovies() {
    const [randomMovies, setRandomMovies] = useState([]);

    useEffect(() => {
        getRandomMovies().then(movies => {
            const items = movies.items;
            let randomMovies = [];
            for (let i = 0; i < 12; i++) {
                const number = Math.floor(Math.random() * items.length);
                randomMovies.push(items[number])
            }
            setRandomMovies(randomMovies);
        });
    }, []);

    return (
        <div className='box_grid'>
            <div className='title_grid'>
                Random top movies
            </div>
            <div className='grid'>
                {randomMovies.map(movie =>
                    <div className='movie_grid' key={movie.id}>
                        <Link to={"/main-page/movie-details/" + movie.id}>
                            <MovieFromGrid movie={movie}/>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}



