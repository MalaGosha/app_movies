import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App';
import {BrowserRouter} from "react-router-dom";
import {MovieContext, MovieProvider} from "./MovieContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MovieProvider>
                <App/>
            </MovieProvider>
        </BrowserRouter>
    </React.StrictMode>
);
