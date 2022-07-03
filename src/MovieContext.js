import { createContext, useState } from "react";

export const MovieContext = createContext({
    setMatchMovie: () => null,
    matchMovies: null,
});

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState(null);
    const value = { matchMovies: movies, setMatchMovie: setMovies };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
