import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {getMovieById} from "../api/getMovieById";
import Navbar from "./Navbar";
import {getYouTubeTrailerById} from "../api/getYouTubeTrailerById";
import '../style/movieDetails.css';

export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState({});
    const [trailer, setTrailer] = useState({});
    let {id} = useParams();

    useEffect(() => {
        getMovieById(id).then(movie => {
            setMovieDetails(movie)
        })
    }, [id])

    useEffect(() => {
        getYouTubeTrailerById(id).then(trailer => {
            setTrailer(trailer)
        })
    }, [])

    return (
        <>
            <Navbar/>
            <div className="card_movie">
                <div className="title_movie_details">{movieDetails.title}</div>
                <div className='img_movie_details'>
                    <img src={movieDetails.image} alt="Posters" width='192' height='264'/>
                </div>
                <div className='content_movie_details'>
                    <div className="imDbRating">{movieDetails.imDbRating}</div>
                    <div className="directors"><b>Director:</b> {movieDetails.directors}</div>
                    <div className="year"><b>Year:</b> {movieDetails.year}</div>
                    <div className="stars"><b>Main actors:</b> {movieDetails.stars}</div>
                    <div className="description"><b>Description movie:</b> {movieDetails.plot}</div>
                </div>
                <div className="trailerUrl">
                    <a href={trailer.videoUrl} target='_blank' rel="noopener">
                        <button className='btn_trailer'>
                            Show trailer
                        </button>
                    </a>
                </div>
            </div>
            <div className='back'>
                <Link to='/main-page'>
                    <button className='btn_go_back'>
                        Go back to home page
                    </button>
                </Link>
            </div>
        </>
    );
}
