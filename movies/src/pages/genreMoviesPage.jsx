import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMoviesByGenre } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../compoents/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";


const GenreMoviesPage = (props) => {
    const { genreId } = useParams();

    const { data, error, isPending, isError } = useQuery({
        queryKey: ["genreMovies", { genreID }],
        queryFn: getMoviesByGenre,
    });

    if (isPending)
        return <Spinner/>;

    if (isError)
        return <h1>{error.message}</h1>

    const movies = data.results;

    return (
        <PageTemplate
        title={'Genre: ${genreId}'}
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} /> }
        />
    );
};

export default GenreMoviesPage;