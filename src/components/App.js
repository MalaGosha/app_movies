import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import '../style/inAndOutPage.css';
import MainPage from './MainPage';
import FarewellPage from "./FarewellPage";
import Greeting from "./Greeting";
import MovieDetails from "./MovieDetails";
import BoxOffice from "./BoxOffice";
import ComingSoon from "./ComingSoon";
import MatchMovies from "./MatchMovies";

export default function App() {
    return (
        <Routes>
            <Route path="/" exact element={<Greeting/>}/>
            <Route path="/main-page" element={<MainPage/>}/>
            <Route path="/farewell-page" element={<FarewellPage/>}/>
            <Route path="/main-page/movie-details/:id" element={<MovieDetails/>}/>
            <Route path="/main-page/box-office" element={<BoxOffice/>}/>
            <Route path='/main-page/box-office/movie-details/:id' element={<MovieDetails/>}/>
            <Route path="/main-page/coming-soon" element={<ComingSoon/>}/>
            <Route path="/main-page/coming-soon/movie-details/:id" element={<MovieDetails/>}/>
            <Route path='/main-page/match-movies/' element={<MatchMovies/>} />
            <Route path="/main-page/match-movies/:id" element={<MovieDetails/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    );
}
