import React from 'react';
import '../style/grid.css';

export default function MovieFromGrid({movie}) {
    return (
        <div>
            <img src={movie.image} alt="Movie" width='192' height='264'/>
            <div className='title_movie_grid'>{movie.title}</div>
        </div>
    );
}
