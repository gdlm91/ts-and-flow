import * as React from "react";
import debounce from "debounce";

export const useSearchMoviesApi = () => {
  const [movies, setMovies] = React.useState([]);

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
