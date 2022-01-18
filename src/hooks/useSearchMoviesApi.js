// @flow

import * as React from "react";
import debounce from "debounce";

import { MovieSearchResult } from "../shared/types-flow";

// FIXME: Why do we need to type this even further? Should be inferred
type useSearchMoviesApiType = {
  movies: MovieSearchResult[],
  searchMovies: (id: string) => Promise<void>,
};

export const useSearchMoviesApi = (): useSearchMoviesApiType => {
  const [movies, setMovies] = React.useState<MovieSearchResult[]>([]);

  const searchMovies = React.useCallback(
    debounce(async (q) => {
      let response = await fetch(
        `http://www.omdbapi.com/?s=${q}&apikey=320f6ab2`
      );
      let movies = await response.json();

      if (movies.Response === "False") {
        return;
      }

      setMovies(movies.Search);
    }, 500),
    []
  );

  return { movies, searchMovies };
};
