import * as React from "react";
import { useParams } from "react-router-dom";

import { MovieDescription } from "../components/movie-description";
import { useMovieApi } from "../hooks/useMovieApi";

const MoviePage: React.FC = () => {
  const { movie, getMovie } = useMovieApi();

  const { id } = useParams();

  React.useEffect(() => {
    if (!id) {
      return;
    }

    getMovie(id);
  }, [id, getMovie]);
  return <>{!movie ? "loading" : <MovieDescription movie={movie} />}</>;
};

export default MoviePage;
