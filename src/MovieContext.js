import { createContext, useState } from "react";

export const MovieContext = createContext({
    setMatchMovies: () => null,
    matchMovies: null,
});

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState(null);
    const value = { matchMovies: movies, setMatchMovies: setMovies };

    return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};
