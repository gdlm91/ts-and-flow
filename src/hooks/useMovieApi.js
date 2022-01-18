import * as React from "react";

export const useMovieApi = () => {
  const [movie, setMovie] = React.useState();

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
