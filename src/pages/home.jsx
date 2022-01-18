// @flow

import * as React from "react";
import { Form } from "react-bootstrap";
import { MovieCard } from "../components/movie-card";

import "./home.scss";
import { useSearchMoviesApi } from "../hooks/useSearchMoviesApi";

// FIXME: how is this type going to be fixed by the flow-to-ts tool?
// FIXME: why do we need to use any instead of leaving Props empty?
const HomePage: React$StatelessFunctionalComponent<any> = () => {
  const [query, setQuery] = React.useState("");
  const { movies, searchMovies } = useSearchMoviesApi();

  const handleTitleChange = (e) => {
    setQuery(e.target.value);
  };

  React.useEffect(() => {
    if (!query) {
      return;
    }

    searchMovies(query);
  }, [query, searchMovies]);

  return (
    <>
      <h1 className="principle-title">Movie Junkie</h1>
      <div className="search">
        <Form.Control
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleTitleChange}
          className="search-input"
        ></Form.Control>
      </div>
      <div className="cards">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
