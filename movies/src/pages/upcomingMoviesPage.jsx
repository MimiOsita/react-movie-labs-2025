import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../compoents/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";


const UpcomingMoviesPage = (props) => {
    const { data, error, isPending, isError } = useQuery({
        queryKey: ["Upcoming"],
        queryFn: getUpcomingMovies,
    });

    if (isPending)
        return <Spinner/>;

    if (isError)
        return <h1>{error.message}</h1>

    const movies = data.results;

    return (
        <PageTemplate
        title="Upcoming Movies"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} /> }
        />
    );
};

export default UpcomingMoviesPage;