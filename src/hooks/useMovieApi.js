// @flow

import * as React from "react";

import { Movie } from "../shared/types-flow";

// FIXME: Why do we need to type this even further? Should be inferred
type useMovieApiType = {
  movie: Movie | null,
  getMovie: (id: string) => Promise<void>,
};

export const useMovieApi = (): useMovieApiType => {
  const [movie, setMovie] = React.useState<Movie | null>(null);

  const getMovie = React.useCallback(async (id) => {
    let response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=320f6ab2`
    );

    let movie = await response.json();
    if (movie.Response === "False") {
      return;
    }
    setMovie(movie);
  }, []);

  return { movie, getMovie };
};
